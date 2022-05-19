import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ethers } from 'ethers'
import { contractAddresses } from '../../addresses'
import { IProfile } from '../../interfaces/IProfile'
import { AttachmentType, DapperContract } from '../../lib/dapperContract'
import { DapperHub__factory, DapperProfile__factory } from '../../typechain'
import { SliceState } from '../statuses'
// import { RootState } from '../store'
import Cookies from 'js-cookie';

export interface ProfileState {
    profiles: IProfile[]
    selectedProfile: IProfile | null;
    status: SliceState
    error: string | null
}
export interface IPostMetaData {
    postText:string,
    attachmentType:AttachmentType,
    postAttachmentUri:string,
}

const loadProfile = createAsyncThunk('profile/loadProfile', async (obj, { rejectWithValue,getState }) => {
    try {
        const state=getState() as any
        if(state.wallet.address==null) return rejectWithValue('Wallet not connected');
        const profiles=await DapperContract.getProfiles()
        return profiles
    } catch (err) {
        return rejectWithValue(err)
    }
})
const registerProfile = createAsyncThunk('profile/registerProfile', async ({imageUri,handle,followNFTUri}:any, { rejectWithValue,getState,dispatch }) => {
    try {
        console.log("registerProfile",imageUri,handle,followNFTUri)
        
        const state=getState() as any
        if(state.wallet.address==null) return rejectWithValue('Wallet not connected');
        
        let transaction=await DapperContract.registerProfile({
            imageURI:imageUri,
            handle,
            followNFTUri
        })
        await transaction.wait();
        await dispatch(loadProfile())
        return true
    } catch (err) {
        return rejectWithValue(err)
    }
})

const publishPost = createAsyncThunk('profile/publishPost',
    async({postText,attachmentType,postAttachmentUri}:IPostMetaData, { rejectWithValue,getState,dispatch })=>{
    try{

        // console.log("publishPost",postText,attachmentType,postAttachmentUri);
        
        const state=getState() as any
        if(state.wallet.address==null) return rejectWithValue('Wallet not connected');
        if(state.profile.selectedProfile==null) return rejectWithValue('User Not Logged In');
        
        await DapperContract.publishPost(state.profile.selectedProfile?.id,{postText,attachmentType,postAttachmentUri})
        await dispatch(loadProfile())
        return true
    }
    catch(err){
        return rejectWithValue(err)
    }
})

const publishComment = createAsyncThunk('profile/publishComment',
    async({parentId,postText,attachmentType,postAttachmentUri}:any, { rejectWithValue,getState,dispatch })=>{
        const state=getState() as any
        if(state.wallet.address==null) return rejectWithValue('Wallet not connected');
        if(state.profile.selectedProfile==null) return rejectWithValue('User Not Logged In');
        
        await DapperContract.publishComment(state.profile.selectedProfile?.id,{parentId,text:postText,attachmentType,postAttachmentUri})
        dispatch(loadProfile())
        return true
    }
)

const publishStory = createAsyncThunk('profile/publishStory',async({attachmentType,postAttachmentUri}:any, { rejectWithValue,getState,dispatch })=>{
    const state=getState() as any
    if(state.wallet.address==null) return rejectWithValue('Wallet not connected');
    if(state.profile.selectedProfile==null) return rejectWithValue('User Not Logged In');
    
    await DapperContract.publishStory(state.profile.selectedProfile?.id,{
        attachmentType,
        postAttachmentUri
    })
    dispatch(loadProfile())
    return true
})

const publishLike = createAsyncThunk('profile/publishLike',
    async(parentId:number, { rejectWithValue,getState,dispatch })=>{
        const state=getState() as any
        if(state.wallet.address==null) return rejectWithValue('Wallet not connected');
        if(state.profile.selectedProfile==null) return rejectWithValue('User Not Logged In');
        
        await DapperContract.publishLike(state.profile.selectedProfile?.id,parentId)
        dispatch(loadProfile())
        return true
    }
)

const publishMirror = createAsyncThunk('profile/publishMirror',
    async(obj:{text:string,parentId:number}, { rejectWithValue,getState,dispatch })=>{
        const state=getState() as any
        if(state.wallet.address==null) return rejectWithValue('Wallet not connected');
        if(state.profile.selectedProfile==null) return rejectWithValue('User Not Logged In');
        
        await DapperContract.publishMirror(state.profile.selectedProfile?.id,obj)
        dispatch(loadProfile())
        return true
    }
)



const initialState: ProfileState = {
    profiles: [],
    selectedProfile: null,
    status: SliceState.Unloaded,
    error: null,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        clearUser: (state) => {
            state.profiles = []
        },
        selectProfile: (state, action: PayloadAction<number>) => {
            state.selectedProfile = state.profiles[action.payload]
            Cookies.set('selectedProfile',action.payload.toString())
        }
    },
    extraReducers: {
        [loadProfile.pending.type]: (state, action) => {
            state.status = SliceState.Loading
        },
        [loadProfile.fulfilled.type]: (state, action: PayloadAction<IProfile[]>) => {
            state.profiles = action.payload
            // state.status = SliceState.Loaded
            let selectedProfileindex=Cookies.get('selectedProfile');
            if(selectedProfileindex&& selectedProfileindex!=""){
                let index=parseInt(selectedProfileindex);
                if(index<state.profiles.length){
                    state.selectedProfile = state.profiles[index]
                }
                else{
                    state.selectedProfile=action.payload[0];    
                }
            }
            else{
                state.selectedProfile=action.payload[0];
            }
            state.status = SliceState.Loaded

        },
        [loadProfile.rejected.type]: (state, action) => {
            state.error = action.payload
            state.status = SliceState.Error
        },
        [registerProfile.pending.type]: (state, action) => {
            state.status = SliceState.Loading
        },
        [registerProfile.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.status = SliceState.Loaded
        },
        [registerProfile.rejected.type]: (state, action) => {
            state.error = action.payload
            state.status = SliceState.Error
        },
    }
})

// Action creators are generated for each case reducer function
export const profileActions = {
    ...profileSlice.actions, 
    loadProfile, 
    registerProfile,
    publishPost,
    publishComment,
    publishStory,
    publishLike,
    publishMirror
}

export default profileSlice.reducer
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMessage } from '../../interfaces/IMessage'
import { IProfile } from '../../interfaces/IProfile'
import { SliceState } from '../statuses'

export interface MessageState {
  messages: IMessage[]
  threads:{user:IProfile, messages:IMessage[]}[]
  status:SliceState
  error:string|null
}

function updateThreads(messages:IMessage[]):MessageState['threads']{
    const threads:MessageState['threads'] = []
    messages.forEach(message=>{
        const thread = threads.find(thread=>thread.user.id===message.from.id)
        if(thread){
        thread.messages.push(message)
        }else{
        threads.push({user:message.from, messages:[message]})
        }
    })
    return threads
}

const loadMessages = createAsyncThunk('messages/loadMessages', async (userId:number, {rejectWithValue})=>{
    try{
        const response = await fetch(`/api/messages/${userId}`)
        const messages = await response.json()
        return messages
    }catch(err){
        return rejectWithValue(err)
    }
})

const initialState: MessageState = {
    messages: [],
    threads: [],
    status: SliceState.Unloaded,
    error: null,
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<IMessage[]>) => {
            state.messages = action.payload
            state.threads=updateThreads(action.payload)
        },
        clearMessages: (state) => {
            state.messages = []
            state.threads=[]
        }
    },
    extraReducers: {
        [loadMessages.pending.type]: (state, action) => {
            state.status = SliceState.Loading
        },
        [loadMessages.fulfilled.type]: (state, action: PayloadAction<IMessage[]>) => {
            state.messages = action.payload
            state.threads=updateThreads(action.payload)
            state.status = SliceState.Loaded
        },
        [loadMessages.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.status = SliceState.Error
        }
    }
})

// Action creators are generated for each case reducer function
export const messageActions = {...messageSlice.actions, loadMessages}

export default messageSlice.reducer
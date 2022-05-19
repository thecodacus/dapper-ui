import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import { SliceState } from '../statuses'
import { ethers } from "ethers";
import { DapperContract } from '../../lib/dapperContract';
import { profileActions } from '../profile';


export interface WalletState {
    address: string | null
    status: SliceState
    error: string | null

}

const connectWallet = createAsyncThunk('wallet/connectWallet', async (obj, { rejectWithValue }) => {
    try {
        const signer = await DapperContract.getSigner()
        const address = await signer.getAddress()
        console.log(address)
        return address
    } catch (err) {
        return rejectWithValue(err)
    }
})
const tryConnectWallet = createAsyncThunk('wallet/tryConnectWallet', async (obj, { rejectWithValue,dispatch }) => {
    try {
        const signer = await DapperContract.getSignerIfConnected()
        if(signer){
            await dispatch(connectWallet())
            await dispatch(profileActions.loadProfile())
        }
    }
    catch (err) {
        return rejectWithValue(err)
    }
})

const initialState: WalletState = {
    address: null,
    status: SliceState.Unloaded,
    error: null,
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [connectWallet.pending.type]: (state, action) => {
            state.status = SliceState.Loading
        },
        [connectWallet.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.address = action.payload
            state.status= SliceState.Loaded
        },
        [connectWallet.rejected.type]: (state, action) => {
            state.error = action.payload
            state.status = SliceState.Error
        }
    }
})

// Action creators are generated for each case reducer function
export const walletActions = {...walletSlice.actions, connectWallet,tryConnectWallet}

export default walletSlice.reducer
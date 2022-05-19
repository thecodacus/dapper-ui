import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { IPFS } from 'ipfs-core';
import React from 'react';
import { IPFSStorage } from '../../lib/ipfs';

// import * as IPFS_ROOT_TYPES from 'ipfs-core-types/src/root';
// import { IPFSHTTPClient } from 'ipfs-http-client'
// import StorageConnectProvider from "@storageconnect/web3-provider";
// import * as IpfsCore from "../../lib/ipfs-core.min"
import { SliceState } from '../statuses'

export interface StorageState {
    client: IPFSStorage | null
    status: SliceState
    error: string | null

}

// const connectStorage = createAsyncThunk('storage/connectStorage',async  (obj, { rejectWithValue }) => {
//     try {
        
//         let node:any= await (window as any).IpfsCore.create()
//         console.log(node);
    
//         return node
       
//     } catch (err) {
//         console.log(err);
        
//         return rejectWithValue(err)
//     }
// })


const initialState: StorageState = {
    client: new IPFSStorage(null),
    status: SliceState.Loaded,
    error: null,
}

export const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        
    }
})

// Action creators are generated for each case reducer function
export const storageActions = {...storageSlice.actions}

export default storageSlice.reducer
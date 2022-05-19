import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IPost } from '../../interfaces/IPost'
import { DapperContract } from '../../lib/dapperContract'
import { SliceState } from '../statuses'
// import { RootState } from '../store'

export interface FeedState {
  posts: IPost[],
  status: SliceState,
  error: string | null,
}

const initialState: FeedState = {
  posts: [],
  status: SliceState.Unloaded,
  error: null,
}
const loadFeeds = createAsyncThunk('feed/loadFeeds', async (args:{offset?:number,limit?:number},{dispatch,getState,rejectWithValue}) => {
	  try {
		  const state = getState() as any
		  if(state.profile.selectedProfile==null) return rejectWithValue('User Not Logged In');
		  const posts = await DapperContract.loadFeed(state.profile.selectedProfile,args.offset,args.limit)
	  return posts
	  } catch (err) {
		  return rejectWithValue(err)
	  }
})


export const feedSlice = createSlice({
	name: 'feed',
	initialState,
	reducers: {
		setFeed: (state, action: PayloadAction<IPost[]>) => {
			state.posts = action.payload
		},
		clearFeed: (state) => {
			state.posts = []
		},
		addPost: (state, action: PayloadAction<IPost>) => {
			state.posts.push(action.payload)
		},
		removePost: (state, action: PayloadAction<number>) => {
			state.posts = state.posts.filter(post=>post.id!==action.payload)
		},
	},
	extraReducers: {
		[loadFeeds.pending.type]: (state, action) => {
			state.status = SliceState.Loading
		},
		[loadFeeds.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
			state.posts = action.payload
			state.status = SliceState.Loaded
		},
		[loadFeeds.rejected.type]: (state, action: PayloadAction<string>) => {
			state.error = action.payload
			state.status = SliceState.Error
		}	
	}
})

// Action creators are generated for each case reducer function
export const feedActions = {...feedSlice.actions,loadFeeds}
export default feedSlice.reducer

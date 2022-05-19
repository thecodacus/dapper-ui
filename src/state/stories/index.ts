import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStory } from '../../interfaces/IStory'
import { SliceState } from '../statuses'

export interface StoryState {
	stories: IStory[]
	status: SliceState
	error: string | null
}

const loadStories = createAsyncThunk('stories/loadStories', async (userId:number, { rejectWithValue }) => {
	try {
		const response = await fetch(`/api/stories/${userId}`)
		const stories = await response.json()
		return stories
	} catch (err) {
		return rejectWithValue(err)
	}
})

const initialState: StoryState = {
	stories: [],
	status: SliceState.Unloaded,
	error: null,
}

export const storySlice = createSlice({
	name: 'stories',
	initialState,
	reducers: {
		setStorys: (state, action: PayloadAction<IStory[]>) => {
			state.stories = action.payload
			state.status = SliceState.Loaded
		},
		clearStorys: (state) => {
			state.stories = []
			state.status = SliceState.Unloaded
		}
	},
	extraReducers: {
		[loadStories.pending.type]: (state, action) => {
			state.status = SliceState.Loading
		},
		[loadStories.fulfilled.type]: (state, action: PayloadAction<IStory[]>) => {
			state.stories = action.payload
			state.status = SliceState.Loaded
		},
		[loadStories.rejected.type]: (state, action) => {
			state.error = action.error.message
			state.status = SliceState.Error
		}
	}
})

// Action creators are generated for each case reducer function
export const storyActions = {...storySlice.actions,loadStories}

export default storySlice.reducer
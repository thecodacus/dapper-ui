import { configureStore } from '@reduxjs/toolkit'

import profileReducer from './profile'
export {profileActions} from './profile'

import messageReducer from './messages'
export {messageActions} from './messages'

import storyReducer from './stories'
export {storyActions} from './stories'

import walletReducer from './wallet'
export {walletActions} from './wallet'

import storageReducer from './storage'
export {storageActions} from './storage'

import feedsReducer from './feeds'
export {feedActions} from './feeds'

export const store = configureStore({
  reducer: {
    profile:profileReducer,
    messages: messageReducer,
    stories: storyReducer,
    wallet: walletReducer,
    storage: storageReducer,
    feeds: feedsReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

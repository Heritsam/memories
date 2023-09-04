import { configureStore } from '@reduxjs/toolkit';

import bankReducer from './bank/bank-reducer';
import chatReducer from './chat/chat-reducer';

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    chat: chatReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
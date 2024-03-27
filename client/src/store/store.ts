import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './api/User';
import AuthSlice from './AsyncThunkApis/AuthSlice';
import { messageApi } from './api/Message';

export const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    [usersApi.reducerPath]: usersApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(messageApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

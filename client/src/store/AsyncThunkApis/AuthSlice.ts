// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './LoginAsyncThunk';
import { logoutUser } from './LogoutAsyncThunk';

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') || '{}')
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(loginUser.pending, (state, action) => {
      //   console.log('pending', state, action);
      // })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(state.user || {}));
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log('error while login man', state, action);
      })
      // .addCase(logoutUser.pending, (state, action) => {
      // console.log('pending', state, action);
      // })
      .addCase(logoutUser.fulfilled, (state) => {
        document.cookie =
          'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        state.user = null;
        localStorage.clear();
      })
      .addCase(logoutUser.rejected, (state) => {
        document.cookie =
          'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        state.user = null;
        localStorage.clear();
      });
  },
});
export default authSlice.reducer;

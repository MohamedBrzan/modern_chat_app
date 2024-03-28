// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './LoginAsyncThunk';
import { logoutUser } from './LogoutAsyncThunk';
import { registerUser } from './RegisterAsyncThunk';

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
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(state.user || {}));
        location.href = '/';
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log('error while login man', state, action);
        location.href = '/sign-in';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(state.user || {}));
        location.href = '/';
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log('error while login man', state, action);
        location.href = '/sign-in';
      })
      // .addCase(logoutUser.pending, (state, action) => {
      // console.log('pending', state, action);
      // })
      .addCase(logoutUser.fulfilled, (state) => {
        document.cookie =
          'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        state.user = null;
        localStorage.clear();
        location.href = '/sign-in';
      })
      .addCase(logoutUser.rejected, (state) => {
        document.cookie =
          'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        state.user = null;
        localStorage.clear();
        location.href = '/';
      });
  },
});
export default authSlice.reducer;

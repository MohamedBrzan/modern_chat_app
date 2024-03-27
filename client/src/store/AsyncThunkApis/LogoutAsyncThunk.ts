// authActions.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import APIS_ROOT from '@/constants/APIS_ROOT';

export const logoutUser = createAsyncThunk('user/logout', async () => {
  const { data } = await axios({
    url: `${APIS_ROOT}/logout`,
    method: 'POST',
    withCredentials: true,
  });
  return data;
});

// authActions.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import APIS_ROOT from '@/constants/APIS_ROOT';

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }: { email: string; password: string }) => {
    const { data } = await axios({
      url: `${APIS_ROOT}/login`,
      method: 'POST',
      data: { email, password },
      withCredentials: true,
    });
    return data;
  }
);

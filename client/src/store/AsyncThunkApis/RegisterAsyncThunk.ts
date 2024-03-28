// authActions.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import APIS_ROOT from '@/constants/APIS_ROOT';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({
    username,
    email,
    password,
    gender,
  }: {
    username: string;
    email: string;
    password: string;
    gender: string;
  }) => {
    const { data } = await axios({
      url: `${APIS_ROOT}/register`,
      method: 'POST',
      data: { username, email, password, gender },
      withCredentials: true,
    });
    return data;
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function registerNewUser(user) {
  const { data } = await axios.post(
    'https://slimmom-backend.goit.global/auth/register',
    user
  );
  return data;
}
export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const response = await registerNewUser(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export async function loginUser(user) {
  const { data } = await axios.post(
    'https://slimmom-backend.goit.global/auth/login',
    user
  );
  return data;
}
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await loginUser(data);
    token.set(response.token);
    console.log('response :>> ', response);
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

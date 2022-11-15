import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      console.log('response :>> ', response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

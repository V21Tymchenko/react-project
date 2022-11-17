import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const dailyRateState = {
  dailyRate: null,
  notAllowedProducts: [],
};

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const dailyRateOperation = createAsyncThunk(
  'dailyRate/fetchDaily',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/daily-rate', credentials);
      return data;
    } catch (err) {}
  }
);
// export const userDailyRateOperation = createAsyncThunk(
//   'user/daily-rate',
//   async (body, { getState, rejectWithValue }) => {
//     const userId = getState().user.data?.sid;

//     if (!userId) {
//       return rejectWithValue();
//     }

//     const { data } = await axios.post('/daily-rate/' + userId, body);
//     return data;
//   }
// );

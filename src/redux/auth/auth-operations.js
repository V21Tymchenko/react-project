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
    token.set(response.accessToken);
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export async function logoutUser() {
  const { data } = await axios.post(
    'https://slimmom-backend.goit.global/auth/logout'
  );
  return data;
}
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await logoutUser();
    token.unset(response.accessToken);
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export async function currentUser() {
  const { data } = await axios.get('https://slimmom-backend.goit.global/user');
  return data;
}
export const current = createAsyncThunk('current/user', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);
  try {
    const response = await currentUser();
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';
export const userDailyRateOperation = createAsyncThunk(
  'user/daily-rate',
  async (body, { getState, rejectWithValue }) => {
    const userId = getState().user.data?.sid;

    if (!userId) {
      return rejectWithValue();
    }

    const { data } = await axios.post('/daily-rate/' + userId, body);
    return data;
  }
);

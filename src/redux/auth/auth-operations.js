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

// export const axiosInstance = axios.create({
//   baseURL: 'https://goit-slim-mom-backend.herokuapp.com/api/',
// });

// export const getPublicData = async values => {
//   try {
//     const response = await axiosInstance.post('products', values);
//     return response.data.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

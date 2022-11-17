import axios from 'axios';

const { createAsyncThunk } = require('@reduxjs/toolkit');

export async function search(product) {
  const { data } = await axios.get(
    `https://slimmom-backend.goit.global/product?search=${product}`
  );
  return data;
}
export async function postDay(dat) {
  const { data } = await axios.post(
    `https://slimmom-backend.goit.global/day`,
    dat
  );
  console.log('data :', data);
  return data;
}
export async function postDayInfo(dat) {
  const { data } = await axios.post(
    `https://slimmom-backend.goit.global/day/info`,
    dat
  );
  console.log('data :', data);
  return data;
}
async function remove(d) {
  const { data } = await axios.delete(
    'https://slimmom-backend.goit.global/day',
    { d }
  );
  console.log('data3131 :>> ', data);
  return data;
}

export const searcheProducts = createAsyncThunk(
  'search/product',
  async (data, thunkAPI) => {
    try {
      const response = await search(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const eatenProduct = createAsyncThunk(
  'search/day',
  async (data, thunkAPI) => {
    // const state = thunkAPI.getState();
    try {
      const response = await postDay(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const dayInfo = createAsyncThunk(
  'search/dayInfo',
  async (data, thunkAPI) => {
    // const state = thunkAPI.getState();
    try {
      const response = await postDayInfo(data);
      console.log('response98878675 :', response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const removeProduct = createAsyncThunk(
  'search/removeProduct',
  async (data, thunkAPI) => {
    try {
      const response = await remove(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

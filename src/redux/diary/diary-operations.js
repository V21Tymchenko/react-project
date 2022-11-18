import axios from 'axios';

const { createAsyncThunk } = require('@reduxjs/toolkit');

// export async function seargeProducts(product) {
//   const { data } = await axios.get(
//     `https://slimmom-backend.goit.global/product/?searg=${product}`
//   );
//   return data;
// }

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

  return data;
}
export const seargeProducts = createAsyncThunk(
  'searg/product',
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
  'searg/day',
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log('state22222 :', state);
    try {
      const response = await postDay(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

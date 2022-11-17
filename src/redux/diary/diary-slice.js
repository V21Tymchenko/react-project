import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from './fetchStatus';
import {
  dayInfo,
  eatenProduct,
  removeProduct,
  searcheProducts,
} from './diary-operations';

const initialState = {
  status: null,
  timeDay: null,
  eatenProducts: null,
  products: null,
  daySummary: null,
  dayInform: [],
};

const products = createSlice({
  name: 'search',
  initialState,
  reducers: {
    timeSet(state, action) {
      console.log('action :', action.payload);
      state.timeDay = action.payload;
    },
  },
  extraReducers: {
    [searcheProducts.pending](state) {
      state.status = fetchStatus.loading;
    },
    [searcheProducts.fulfilled](state, action) {
      console.log('action222 :', action);
      state.status = fetchStatus.loading;
      state.products = action.payload;
      // console.log('products', state.products);
    },
    [searcheProducts.rejected](state) {
      state.status = fetchStatus.error;
    },

    [eatenProduct.fulfilled](state, action) {
      state.eatenProducts = action.payload.day.eatenProducts;
      state.daySummary = action.payload.daySummary;
      console.log('dcsmdm', action.payload.day.id);
      state.products = null;
    },
    [eatenProduct.rejected](state) {
      state.status = fetchStatus.error;
    },
    [dayInfo.fulfilled](state, action) {
      state.dayInform = action.payload;
    },
    [removeProduct.fulfilled](_, action) {
      // state.eatenProducts = action.payload.day.eatenProducts;
      // state.daySummary = action.payload.daySummary;
      console.log('dcsmdm', action.payload);
      // state.products = null;
    },
  },
});
export const { timeSet } = products.actions;
const productsReducer = products.reducer;
export default productsReducer;

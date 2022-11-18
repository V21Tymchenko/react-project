import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from './fetchStatus';
import { eatenProduct, searcheProducts } from './diary-operations';

const initialState = {
  status: null,
  timeDay: null,
  eatenProducts: null,
  products: null,
  daySummary: null,
};

const products = createSlice({
  name: 'search',
  initialState,
  reducers: {
    timeSet(state, action) {
      state.timeDay = action.payload;
    },
  },
  extraReducers: {
    [searcheProducts.pending](state) {
      state.status = fetchStatus.loading;
    },

    [searcheProducts.fulfilled](state, action) {
      state.status = fetchStatus.loading;
      state.products = action.payload;
    },
    [searcheProducts.rejected](state) {
      state.status = fetchStatus.error;
    },

    [eatenProduct.fulfilled](state, action) {
      state.eatenProducts = action.payload.day.eatenProducts;
      state.daySummary = action.payload.daySummary;
      state.status = fetchStatus.success;
    },
    [eatenProduct.rejected](state) {
      state.status = fetchStatus.error;
    },
  },
});
export const { timeSet } = products.actions;
const productsReducer = products.reducer;
export default productsReducer;

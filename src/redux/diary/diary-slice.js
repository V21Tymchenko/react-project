import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from './fetchStatus';
import { dayInfo, eatenProduct, removeProduct } from './diary-operations';

const initialState = {
  status: null,
  timeDay: null,
  eatenProducts: null,
  daySummary: null,
  dayInform: null,
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
    // [searcheProducts.pending](state) {
    //   state.status = fetchStatus.loading;
    // },
    // [searcheProducts.fulfilled](state, action) {
    //   // state.status = fetchStatus.loading;
    //   state.products = action.payload;
    // },
    // [searcheProducts.rejected](state) {
    //   state.status = fetchStatus.error;
    // },

    [eatenProduct.fulfilled](state, action) {
      state.eatenProducts = action.payload.day.eatenProducts;
      state.daySummary = action.payload.daySummary;
      state.products = null;
    },
    [eatenProduct.rejected](state) {
      state.status = fetchStatus.error;
    },

    [dayInfo.fulfilled](state, action) {
      state.dayInform = action.payload.id;
      state.daySummary = action.payload.daySummary;
      state.eatenProducts = action.payload.eatenProducts;
    },

    [removeProduct.fulfilled](state, action) {
      state.eatenProducts = state.eatenProducts.filter(
        item => item.id !== action.meta.arg.eatenProductId
      );
      state.daySummary = action.payload.newDaySummary;
      console.log('newDaySummary', action.payload.newDaySummary);
    },
  },
});
export const { timeSet } = products.actions;
const productsReducer = products.reducer;
export default productsReducer;

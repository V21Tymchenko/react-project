import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from './fetchStatus';
import { eatenProduct, seargeProducts } from './diary-operations';

const initialState = {
  token: null,
  status: null,
  timeDay: null,
  eatenProducts: null,
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
    [seargeProducts.pending](state) {
      state.status = fetchStatus.loading;
    },
    [seargeProducts.fulfilled](state, action) {
      console.log('action :', action);
      state.status = fetchStatus.loading;
    },
    [seargeProducts.rejected](state) {
      state.status = fetchStatus.error;
    },

    [eatenProduct.fulfilled](state, action) {
      console.log('action :', action);
      //   state.eatenProducts = fetchStatus.loading;
    },
    [eatenProduct.rejected](state) {
      state.product = fetchStatus.error;
    },
  },
});
export const { timeSet } = products.actions;
const productsReducer = products.reducer;
export default productsReducer;

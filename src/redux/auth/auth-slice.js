import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from './fetchStatus';
import { login, register } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  status: fetchStatus.init,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.status = fetchStatus.loading;
    },
    [register.fulfilled](state, action) {
      state.status = fetchStatus.success;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state) {
      state.status = fetchStatus.error;
      state.user.name = '';
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },

    [login.pending](state) {
      state.status = fetchStatus.loading;
    },
    [login.fulfilled](state, action) {
      state.status = fetchStatus.success;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state) {
      state.status = fetchStatus.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});
const authReducer = authSlice.reducer;

export default authReducer;

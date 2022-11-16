import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from './fetchStatus';
import { current, login, logout, register } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  status: fetchStatus.init,
  isFetchCurrentUser: false,
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
      state.token = action.payload.accessToken;
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
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [login.rejected](state) {
      state.status = fetchStatus.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },

    [logout.pending](state) {
      state.status = fetchStatus.loading;
    },
    [logout.fulfilled](state) {
      state.status = fetchStatus.success;
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state) {
      state.status = fetchStatus.error;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },

    [current.pending](state) {
      state.status = fetchStatus.loading;
      state.isFetchCurrentUser = true;
    },
    [current.fulfilled](state, action) {
      state.status = fetchStatus.success;
      state.user.name = action.payload.username;
      state.user.email = action.payload.email;
      state.isFetchCurrentUser = false;
      state.isLoggedIn = true;
    },
    [current.rejected](state) {
      state.status = fetchStatus.error;
      state.isFetchCurrentUser = false;
    },
  },
});
const authReducer = authSlice.reducer;

export default authReducer;

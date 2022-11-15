import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import authReducer from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import { dailyRateReducer } from './dailyRate/dailyRate-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistAuthReducer,
  dailyRate: dailyRateReducer,
});

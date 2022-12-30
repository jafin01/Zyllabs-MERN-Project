import { configureStore } from '@reduxjs/toolkit';
import urlSliceReducer from './serverBaseUrl';
import authReducer from './authSlice';

const store = configureStore({
  reducer: { serverBaseUrl: urlSliceReducer, authData: authReducer },
});

export default store;

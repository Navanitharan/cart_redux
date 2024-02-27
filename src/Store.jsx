
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducers/Product-react';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

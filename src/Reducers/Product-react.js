
import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ ...action.payload, quantity: 1 });
    },


    setQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const productIndex = state.products.findIndex(product => product.id === productId);
      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          quantity: newQuantity
        };
      }
    }

  },
});

export const { addProduct, setQuantity } = productSlice.actions;

export default productSlice.reducer;

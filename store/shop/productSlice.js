/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: [],
  filtered: [],
};
function calculateCartPrice() {
  const t = initialState.cart.forEach((element) => (t += element.price));
  return t;
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadProduct: (state, action) => {
      return { ...state };
    },
    addProduct: (state, action) => {
      return { ...state, product: action.payload };
    },
    filterByCategory: (state, action) => {
      return {
        ...state,
        filtered: state.product.filter(
          (element) => element.category == action.payload
        ),
      };
    },
    applyFilter: (state, action) => {
      console.log('Actions: ', action.payload.priceRange);
      return {
        ...state,
        filtered: state.product.filter(
          (element) =>
            action.payload.categories.includes(element.category) &&
            element.price <= action.payload.priceRange
        ),
      };
    },
    singleProduct: (state, action) => {
      return {
        ...state,
        product: state.product.filter(
          (element) => element.id == action.payload.id
        ),
      };
    },
  },
});

export const {
  loadProduct,
  singleProduct,
  addProduct,
  filterByCategory,
  applyFilter,
} = productSlice.actions;
export default productSlice.reducer;

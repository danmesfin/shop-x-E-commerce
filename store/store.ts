import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import cartSlice from './shop/cartReducerSlice';
import productSlice from './shop/productSlice';
import wishListSlice from './shop/wishList';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productSlice,
    cart: cartSlice,
    wishList: wishListSlice,
  },
});

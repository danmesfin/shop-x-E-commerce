import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    loadWishList: (state, action) => {
      return { ...state, wishList: [...state.wishList, action.payload] };
    },

    addToWishList: (state, action) => {
      const itemInCart = state.wishList.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        //
      } else {
        state.wishList.push({ ...action.payload });
      }
    },

    removeFromWishList: (state, action) => {
      return {
        ...state,
        wishList: state.wishList.filter(
          (element) => element.id !== action.payload.id
        ),
      };
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalCartItem: 0,
  totalCartPrice: 0,
};

function calculateCartPrice(cartt) {
  const t = 0;
  cartt.forEach((element) => (t += element.price * element.quantity));
  return t.toFixed(2);
}
function calculateCartItems(cart) {
  const t = 0;
  cart.forEach((element) => (t += element.quantity));
  return t;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCart: (state, action) => {
      return { ...state, cart: [...state.cart, action.payload] };
    },

    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((element) => element.id !== action.payload.id),
      };
    },

    totalAmount: (state) => {
      return { ...state, totalCartPrice: calculateCartPrice(state.cart) };
    },
    totalCartItems: (state) => {
      return { ...state, totalCartItem: calculateCartItems(state.cart) };
    },
  },
});

export const {
  loadCart,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  totalAmount,
  totalCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;

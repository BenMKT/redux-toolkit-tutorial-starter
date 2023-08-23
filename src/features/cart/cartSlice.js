import { createSlice } from '@reduxjs/toolkit';
import cartItems from "../../cartItems";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
  },
});

// console.log(cartSlice);

export default cartSlice.reducer;

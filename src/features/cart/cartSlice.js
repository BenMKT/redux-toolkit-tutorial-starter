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
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => {
                return item.id !== itemId;
            });
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => {
                return item.id === payload;
            });
            cartItem.amount ++;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => {
                return item.id === payload;
            });
            cartItem.amount --;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.price * item.amount;
            });
            state.amount = amount;
            state.total = total;
        },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;

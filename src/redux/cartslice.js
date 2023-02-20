import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    clearCart: (state) => {
      return [];
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
  },
});

export const { clearCart, deleteFromCart, addToCart } = CartSlice.actions;
export default CartSlice.reducer;

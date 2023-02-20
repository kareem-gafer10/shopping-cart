import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";
import cartslice from "./cartslice";

export const store = configureStore({
  reducer: {
    Products: ProductsSlice,
    Cart: cartslice,
  },
});

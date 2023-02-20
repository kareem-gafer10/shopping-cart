import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "ProductsSlice/fetchProducts",
  async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const ProductsSlice = createSlice({
  initialState: [],
  name: "ProductsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = ProductsSlice.actions;
export default ProductsSlice.reducer;

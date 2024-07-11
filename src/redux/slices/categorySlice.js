import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../../api/service";

// Async thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await service.getAllProducts(); // Assuming getAllProducts() fetches all products
    console.log(data, "---all products data---");
    return data;
  }
);

// Products slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isError: "",
    isLoading: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = "Loading...";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = "Success";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = "Failed";
        state.isError = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;

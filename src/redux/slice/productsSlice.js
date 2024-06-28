import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import service from "../../api/service";

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async ({id,name}) => {
    const { data } = await service.getCategoryById(id);
    console.log(data, "---data---");
    const response = {
      data,
      name,
    };
    return response;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categoryName:"",
    isError: "",
    isLoading: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.isLoading = "Loading...";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = "Success";
        state.items = action.payload.data;
        state.categoryName = action.payload.name;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.isLoading = "Failed";
        state.isError = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../../api/service";

// Async thunks
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async ({ id, name }) => {
    const { data } = await service.getCategoryById(id);
    console.log(data, "---data---");
    return { data, name };
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const { data } = await service.getProductById(id);
    console.log(data, "---product data 111---");
    return data;
  }
);

// Products slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    item: {},
    categoryName: "",
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
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = "Loading...";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {

        console.log(action, '--action 1 pro');
        state.isLoading = "Success";
        state.item = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = "Failed";
        state.isError = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;

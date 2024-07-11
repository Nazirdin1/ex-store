// // slices/allproduct.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import service from "../../api/service";


// export const getAllProducts = createAsyncThunk(
//   "products/getAllProducts",
//   async () => {
//     try {
//       const { data } = await service.getAllProducts();
//       console.log(data, "---All product data---");
//       return data;
//     } catch (error) {
//       throw new Error("Не удалось загрузить продукты");
//     }
//   }
// );

// const productsAllSlice = createSlice({
//   name: "productsAll",
//   initialState: {
//     items: [],
//     item: {},
//     categoryName: "",
//     isError: false,
//     isLoading: false,
//   },
//   reducers: {
//     // Вы можете добавлять дополнительные reducers здесь при необходимости
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllProducts.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//       })
//       .addCase(getAllProducts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload;
//       })
//       .addCase(getAllProducts.rejected, (state) => {
//         state.isLoading = false;
//         state.isError = true;
//       });
//   },
// });

// export const productsAllReducer = productsAllSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../../api/service";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const { data } = await service.getAllProducts();
      console.log(data, "---All product data---");
      return data;
    } catch (error) {
      throw new Error("Не удалось загрузить продукты");
    }
  }
);

const productsAllSlice = createSlice({
  name: "productsAll",
  initialState: {
    items: [],
    isError: false,
    isLoading: false,
  },
  reducers: {
    // Вы можете добавлять дополнительные reducers здесь при необходимости
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const productsAllReducer = productsAllSlice.reducer;

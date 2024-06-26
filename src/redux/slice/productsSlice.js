// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import service from "../../api/service";

// export const fetchProductsByCategory=createAsyncThunk(
//     "products/fetchProductsByCategory",
//     async (id)=>{
//         const {}=await service.getCategoryById(id)
//         console.log(data, "---data---");
//     }
// );

// const productsSlice=createSlice({

//     name:"products",
//     initialState:{
//         items:[],
//         isError:"",
//         isLoading:""
//     },
//     reducers:{},
//     extraReducers:(builder)=>{

//     }
// }

// )

// export default productsReducer = productsSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import service from "../../api/service";

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (id) => {
    console.log('87888');
    const { data } = await service.getCategoryById(id);
    console.log(data, "---data---");
    return data;
  }
);

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
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.isLoading = "Loading...";
        
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = "Success";
        state.items = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state,action) => {
        state.isLoading = "Failed";
        state.isError = action.payload;
      });
  }
});

export const productsReducer = productsSlice.reducer;

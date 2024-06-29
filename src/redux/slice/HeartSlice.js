import { createSlice } from "@reduxjs/toolkit";

const heartSlice = createSlice({
  name: 'heart',
  initialState: {
    items2: [],
  },
  reducers: {
    addItem2(state, action) {
      state.items2.push(action.payload);
    },
    removeItem2(state, action) {
      state.items2 = state.items2.filter(item => item.id !== action.payload.id);
    },
    removeAllItems2(state) {
      state.items2 = [];
    },
  },
});

export const { addItem2, removeItem2, removeAllItems2 } = heartSlice.actions;
export const heartReducer = heartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, { payload }) {
      state.items = [...state.items, payload];
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

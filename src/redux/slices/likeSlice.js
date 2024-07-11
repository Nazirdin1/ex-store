import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    items: JSON.parse(localStorage.getItem("likedItems")) || [],
  },
  reducers: {
    addToLike: (state, { payload }) => {
      const hasInItems = state.items.find((el) => el.id === payload.id);
      if (hasInItems) {
        hasInItems.quantity += 1;
        return;
      }
      const item = {
        ...payload,
        isLike: true,
        quantity: 1,
      };
      state.items.push(item);
      saveToLocal(state.items);
    },
    removeFromLike: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
      saveToLocal(state.items);
    },
  },
});

export const { addToLike, removeFromLike } = likeSlice.actions;
export const likeReducer = likeSlice.reducer;

function saveToLocal(items) {
  localStorage.setItem("likedItems", JSON.stringify(items));
}

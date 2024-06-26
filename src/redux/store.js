import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slice/productsSlice';


const store = configureStore({
  reducer: {
   products:productsReducer,
// user: userReducer,
  },
});

export default store;

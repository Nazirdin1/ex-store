import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slice/productsSlice';
import { cartReducer } from './slice/CartSlice';


const store = configureStore({
  reducer: {
   products:productsReducer,
 cart:cartReducer
// user: userReducer,
  },
});

export default store;

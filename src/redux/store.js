import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slice/productsSlice';
import { cartReducer } from './slice/CartSlice';
import { heartReducer } from './slice/HeartSlice';




const store = configureStore({
  reducer: {
   products:productsReducer,
 cart:cartReducer,
heart:heartReducer,
// user: userReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import darkModeReducer from "./darkModeSlice";
import productReducer from "./productSlice";

import ordersReducer from './ordersSlice';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    darkMode: darkModeReducer,
    products: productReducer,
    orders: ordersReducer,
    users: usersReducer,
  },
});

export default store;


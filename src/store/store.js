import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-actions/cartSlice";
import cartUiSlice from "./cart-actions/cartUiSlice";
//import userSlice from "./user-actions/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartui: cartUiSlice,
  },
});

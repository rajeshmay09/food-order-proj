import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-actions/cartSlice";
import cartUiSlice from "./cart-actions/cartUiSlice";
import { userSlice } from "./slices/userSlice";
import { productSlice } from "./slices/productslice";
import storeslice from "./slices/storeslice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartui: cartUiSlice,
    user: userSlice,
    product: productSlice,
    stores: storeslice,
  },
});

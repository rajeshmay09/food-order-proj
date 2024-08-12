import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-actions/cartSlice";
import cartUiSlice from "./cart-actions/cartUiSlice";

import productSlice from "./slices/productslice";
import storelistSlice from "./slices/storellistSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartui: cartUiSlice,

    product: productSlice,
    storelist: storelistSlice,
  },
});

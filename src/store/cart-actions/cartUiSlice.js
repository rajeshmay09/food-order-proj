import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartvisible: false,
  }

export const cartUiSlice = createSlice({
    name: "cartui",
    initialState,
    reducers: {
        toggle(state){
            state.cartvisible = !state.cartvisible;
        },
    }
})

export const {toggle} = cartUiSlice.actions;

export default cartUiSlice.reducer;
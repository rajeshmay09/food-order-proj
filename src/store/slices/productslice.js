import { createSlice } from "@reduxjs/toolkit";
import products from "../../assets/fake-data/products";

const initialState = {
  products: products, // List of products
  selectedProduct: null, // Currently selected product
  status: "idle", // Status of the products data (e.g., 'loading', 'succeeded', 'failed')
  error: null, // Error message if there's an issue fetching products
  selectedStoreId: null, // Track the selected store
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // Action to set a selected product
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    // Action to set loading status
    setLoading: (state) => {
      state.status = "loading";
    },
    // Action to set success status
    setSuccess: (state) => {
      state.status = "succeeded";
    },
    // Action to set error status and message
    setError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    setSelectedStore: (state, action) => {
      state.selectedStoreId = action.payload; // Update the selected store ID
    },
  },
});

export const selectProductsByStore = (state) => {
  if (state.product.selectedStoreId) {
    return state.product.products.filter(
      (product) => product.storeId === state.product.selectedStoreId
    );
  }
  return state.product.products; // Return all products if no store is selected
};

export const {
  setSelectedStore,
  setError,
  setLoading,
  setProducts,
  selectProduct,
} = productSlice.actions;
export default productSlice.reducer;

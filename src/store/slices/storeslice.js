import { createSlice } from "@reduxjs/toolkit";
import stores from "../../assets/fake-data/store";

const initialState = {
  stores: stores, // Initial store data
  selectedStoreId: null, // Track the selected store
  status: "idle", // For loading state (optional)
  error: null, // For error handling (optional)
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setSelectedStore: (state, action) => {
      state.selectedStoreId = action.payload;
    },
    // Optional: Add a reducer to update store information if needed
    updateStore: (state, action) => {
      const { id, data } = action.payload;
      const storeIndex = state.stores.findIndex((store) => store.id === id);
      if (storeIndex !== -1) {
        state.stores[storeIndex] = { ...state.stores[storeIndex], ...data };
      }
    },
  },
});
export const { setSelectedStore, updateStore } = storeSlice.actions;

export default storeSlice.reducer;

export const selectSelectedStore = (state) => {
  if (state.store.selectedStoreId) {
    return state.store.stores.find(
      (store) => store.id === state.store.selectedStoreId
    );
  }
  return null; // Return null if no store is selected
};

// Selector to get all stores
export const selectAllStores = (state) => state.store.stores;

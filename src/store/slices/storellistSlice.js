import { createSlice } from "@reduxjs/toolkit";
import storeslist from "../../assets/fake-data/store";

const initialState = {
  storelist: storeslist, // Initial store data
  selectedStoreId: null, // Track the selected store
  status: "idle", // For loading state (optional)
  error: null, // For error handling (optional)
};

export const storelistSlice = createSlice({
  name: "storelist",
  initialState,
  reducers: {
    setSelectedStore(state, action) {

      state.selectedStoreId = action.payload;
      return state;
    },
    // Optional: Add a reducer to update store information if needed
    updateStore(state, action) {
      const { id, data } = action.payload;
      const storeIndex = state.stores.findIndex((store) => store.id === id);
      if (storeIndex !== -1) {
        state.stores[storeIndex] = { ...state.stores[storeIndex], ...data };
      }
    },
  },
});

export const { setSelectedStore, updateStore } = storelistSlice.actions;

export default storelistSlice.reducer;

export const selectSelectedStore = (state, storeId) => {
  if (storeId) {
    return state.storelist.find((store) => store.id === storeId);
  }
  return null; // Return null if no store is selected
}
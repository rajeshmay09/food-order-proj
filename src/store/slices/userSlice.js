import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null, // Stores user data, initially null
  isLoggedIn: false, // Indicates whether the user is logged in
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    // Action to clear user data (e.g., after logout)
    logout: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
    },
    // Action to update user profile
    updateProfile: (state, action) => {
      if (state.userInfo) {
        state.userInfo = { ...state.userInfo, userInfo: action.payload };
      }
    },
  },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;

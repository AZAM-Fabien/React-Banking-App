import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  token: null,
  isAuthenticated: false,
};

const signInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = signInSlice.actions;
export default signInSlice.reducer;

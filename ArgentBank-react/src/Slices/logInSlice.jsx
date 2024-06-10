import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
};

const logInSlice = createSlice({
  name: "identity",
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addPassword: (state, action) => {
      state.password = action.payload;
    },
    removeIdentity: (state) => {
      state.email = null;
      state.password = null;
    },
  },
});

export const { addEmail, addPassword, removeIdentity } = logInSlice.actions;
export default logInSlice.reducer;

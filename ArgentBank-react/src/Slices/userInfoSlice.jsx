import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  firstName: null,
  lastName: null,
  edit: false
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    removeUserInfo: (state) => {
      state.userName = null;
      state.firstName = null;
      state.lastName = null;
    },

    triggerEdit: (state) => {
      state.edit = !state.edit;
    },
  },
});
export const { getUserInfo, removeUserInfo, triggerEdit } = userInfoSlice.actions;
export default userInfoSlice.reducer;

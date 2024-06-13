import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  firstName: null,
  lastName: null,
  edit: false,
  newUserName: null,
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

    addNewUserName: (state, action) => {
      state.newUserName = action.payload;
    },

    editUserName: (state) => {
      state.userName = state.newUserName;
    },
  },
});
export const { getUserInfo, removeUserInfo, triggerEdit, addNewUserName, editUserName } = userInfoSlice.actions;
export default userInfoSlice.reducer;

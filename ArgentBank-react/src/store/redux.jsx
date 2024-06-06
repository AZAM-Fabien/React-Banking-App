import { configureStore } from "@reduxjs/toolkit"
import signInSlice from '../Slices/signInSlices.jsx';
// import profileReducer from '../Slices/profileSlice.jsx';

export const store = configureStore({
  reducer: {
    auth: signInSlice,
    // user: profileReducer,
  },
});
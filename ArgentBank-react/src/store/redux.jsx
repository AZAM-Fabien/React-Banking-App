import { configureStore } from "@reduxjs/toolkit"
import signInSlice from '../Slices/signInSlices.jsx';
import logInSlice from '../Slices/logInSlice.jsx';
// import profileReducer from '../Slices/profileSlice.jsx';

export const store = configureStore({
  reducer: {
    connect: signInSlice,
    identity: logInSlice,
    // user: profileReducer,
    
  },
});
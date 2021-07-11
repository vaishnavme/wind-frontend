import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import exploreReducer from "../features/expolre/exploreSlice";

export const store = configureStore({
  reducer: {
    auth: authUserReducer,
    profile: profileReducer,
    explore: exploreReducer
  },
});

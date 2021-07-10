import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authUserReducer,
    profile: profileReducer
  },
});

import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authUserReducer
  },
});

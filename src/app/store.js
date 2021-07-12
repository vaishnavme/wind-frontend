import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from "../features/auth/authSlice";
import postsReducers from '../features/posts/postsSlice';
import profileReducer from "../features/profile/profileSlice";
import exploreReducer from "../features/expolre/exploreSlice";

export const store = configureStore({
  reducer: {
    auth: authUserReducer,
    posts: postsReducers,
    explore: exploreReducer,
    profile: profileReducer,
  },
});

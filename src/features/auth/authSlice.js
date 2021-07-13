import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInUser, signUpUser } from "../../services/auth.service";
import { getAuthProfile } from "../../services/auth.service";
import { followUserProfile, unFollowUserProfile } from "../../services/profile.service";

export const loginUserWithCredentials = createAsyncThunk(
  "auth/loginUserWithCredentials",
  async ({ email, password }) => {
    const {data: {user, token, message, success}} = await logInUser({ email, password });
    if (!success) {
      throw new Error(message);
    }
    const userId = user._id;
    return { token, userId };
  }
);

export const signupUserWithCredentials = createAsyncThunk(
  "auth/signupUserWithCredentials",
  async ({name, username, email, password}) => {
    const {data: {user, token, message, success}} = await signUpUser({name, username, email, password});
    if (!success) {
      throw new Error(message);
    }
    const userId = user._id;
    return { userId, token}
  }
);

export const initializeAuthUser = createAsyncThunk(
  "auth/initializeAuthUser",
  async(userId) => {
    const {data: {success, profile, message}} = await getAuthProfile(userId);
    if(!success) {
        throw new Error(message);
    }
    return profile
  }
);

export const followUser = createAsyncThunk(
  "auth/followUser",
  async(profileId) => {
    const followedId = followUserProfile(profileId);
    return followedId
  }
)

export const unFollowUser = createAsyncThunk(
  "auth/unFollowUser",
    async(profileId) => {
      const unfollowedId = unFollowUserProfile(profileId);
      return unfollowedId
    }
)

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userToken: JSON.parse(localStorage?.getItem("authUserToken")) || null,
    userId: JSON.parse(localStorage?.getItem("authUserId")) || null,
    isAuthenticated: JSON.parse(localStorage?.getItem("isAuthenticated")) || null,
    status: JSON.parse(localStorage?.getItem("authUserToken"))
      ? "tokenReceived"
      : "idle",
    user: null,
  },
  reducers: {
    logOutUser: () => {
      console.log("here");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("authUserToken");
      localStorage.removeItem("authUserId");
      return {
        status: "idle",
        userToken: null,
        userId: null,
        isAuthenticated: false,
        user: null,
      };
    },
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: {
    [loginUserWithCredentials.pending]: (state) => {
      state.status = "loading";
    },
    [loginUserWithCredentials.fulfilled]: (state, action) => {
      const { token, userId } = action.payload;
      state.userToken = token;
      state.userId = userId;
      state.isAuthenticated = true;
      localStorage.setItem("authUserToken", JSON.stringify(token));
      localStorage.setItem("authUserId", JSON.stringify(userId));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      axios.defaults.headers.common["Authorization"] = token;
    //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      state.status = "tokenReceived";
    },
    [loginUserWithCredentials.rejected]: (state) => {
      console.log("error");
      state.status = "error";
    },
    [signupUserWithCredentials.pending]: (state) => {
      state.status = "loading";
      console.log("pending");
    },
    [signupUserWithCredentials.fulfilled]: (state, action) => {
      const { token, userId } = action.payload;
      state.userToken = token;
      state.userId = userId;
      state.isAuthenticated = true;
      localStorage.setItem("authUserToken", JSON.stringify(token));
      localStorage.setItem("authUserId", JSON.stringify(userId));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      axios.defaults.headers.common["Authorization"] = token;
    //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      state.status = "tokenReceived";
    },
    [signupUserWithCredentials.rejected]: (state, action) => {
      console.log(action);
      state.status = "error";
    },
    [initializeAuthUser.pending]: (state) => {
      state.status = "loading"
    },
    [initializeAuthUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "profileLoaded"
    },
    [initializeAuthUser.rejected]: (state) => {
      state.status = "error"
    },

    [followUser.pending]: (state) => {
      state.status = "loading"
    },
    [followUser.fulfilled]: (state, action) => {
      state.user.following.push(action.payload);
      state.status = "Fulfilled"
    },
    [followUser.rejected]: (state) => {
      state.status = "rejected"
    },
    [unFollowUser.pending]: (state) => {
      state.status = "loading"
    },
    [unFollowUser.fulfilled]: (state, action) => {
      state.user.following.splice(state.user.following.indexOf(action.payload), 1);
      state.status = "Fulfilled"
    },
    [unFollowUser.rejected]: (state) => {
      state.status = "rejected"
    }
  },
});

export const { logOutUser, resetStatus } = authSlice.actions;

export default authSlice.reducer;

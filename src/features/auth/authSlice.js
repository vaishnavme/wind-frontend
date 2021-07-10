import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInUser, signUpUser } from "../../services/auth.service";

export const loginUserWithCredentials = createAsyncThunk(
  "auth/loginUserWithCredentials",
  async ({ email, password }) => {
    const {data: {userId, token, message, success}} = await logInUser({ email, password });
    if (!success) {
      throw new Error(message);
    }
    return { token, userId };
  }
);

export const signupUserWithCredentials = createAsyncThunk(
  "auth/signupUserWithCredentials",
  async (variables) => {
    const {data: {success, message, userId, token}} = await signUpUser(variables);
    if (!success) {
      throw new Error(message);
    }
    return { userId, token}
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userToken: JSON.parse(localStorage?.getItem("authUserToken")) || null,
    userId: JSON.parse(localStorage?.getItem("authUserId")) || null,
    isAuthenticated: JSON.parse(localStorage?.getItem("isAuthenticated")) || null,
    status: JSON.parse(localStorage?.getItem("authUserToken"))
      ? "tokenReceived"
      : "idle",
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
    [loginUserWithCredentials.rejected]: (state, action) => {
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
    }
  },
});

export const { logOutUser, resetStatus } = authSlice.actions;

export default authSlice.reducer;

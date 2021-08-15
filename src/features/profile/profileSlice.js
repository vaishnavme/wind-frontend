import { createSlice } from "@reduxjs/toolkit";
import {
    getUserProfile,
    updateUserProfile,
    updateUserPassword
} from "./request";

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profileStatus: "idle",
        profile: null,
        error: null
    },
    reducers: {
        resetProfile: (state) => {
            state.profile = null;
            state.profileStatus = "idle";
        }
    },
    extraReducers: {
        [getUserProfile.pending]: (state) => {
            state.profileStatus = "loading"
        },
        [getUserProfile.fulfilled]: (state, action) => {
            const { profile } = action.payload;
            state.profile = profile;
            state.profileStatus = "dataReceived"
        },
        [getUserProfile.rejected]: (state, action) => {
            state.error = action.payload
            state.profileStatus = "error"
        },

        [updateUserProfile.pending]: (state) => {
            state.profileStatus = "updating"
        },
        [updateUserProfile.fulfilled]: (state) => {
            state.profileStatus = "Fulfilled"
        },
        [updateUserProfile.rejected]: (state) => {
            state.profileStatus = "error"
        },

        [updateUserPassword.pending]: (state) => {
            state.profileStatus = "updating password"
        },
        [updateUserPassword.fulfilled]: (state) => {
            state.profileStatus = "Fulfilled"
        },
        [updateUserPassword.pending]: (state) => {
            state.profileStatus = "error"
        },
    }
})

export const { resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, updateProfile, updatePassword } from "../../services/profile.service";

export const getUserProfile = createAsyncThunk(
    "profile/getUserProfile",
    async(profileId) => {
        const {data: {success, profile, message}} = await getProfile(profileId);
        if(!success) {
            throw new Error(message);
        }
        return profile
    }
)

export const updateUserProfile = createAsyncThunk(
    "profile/updateUserProfile",
    async(profileUpdates) => {
        const {data: {success, updatedUserProfile, message}} = await updateProfile(profileUpdates);
        if(!success) {
            throw new Error(message);
        }
        console.log(updatedUserProfile)
    }
)

export const updateUserPassword = createAsyncThunk(
    "profile/updateUserPassword",
    async(passwordUpdate) => {
        const {data: {success, message, updateAccount}} = await updatePassword(passwordUpdate);
        if(!success) {
            throw new Error(message);
        }
        console.log(updateAccount)
    }
)

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profileStatus: "idle",
        profile: null
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
            state.profile = action.payload;
            state.profileStatus = "dataReceived"
        },
        [getUserProfile.rejected]: (state) => {
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
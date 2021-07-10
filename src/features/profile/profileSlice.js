import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../../services/profile.service";

export const getUserProfile = createAsyncThunk(
    "auth/logInUserWithCredentials",
    async(profileId) => {
        const {data: {success, profile, message}} = await getProfile(profileId);
        if(!success) {
            throw new Error(message);
        }
        return profile
    }
)

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profileStatus: "idle",
        profile: null
    },
    reducers: {},
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
        }
    }
})

export default profileSlice.reducer
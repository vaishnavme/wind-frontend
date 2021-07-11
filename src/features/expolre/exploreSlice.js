import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProfiles } from "../../services/explore.service";

export const getAllUserProfiles = createAsyncThunk(
    "explore/getAllUserProfiles",
    async() => {
        const {data: {success, allUsers, message}} = await getAllProfiles();
        if(!success) {
            throw new Error(message);
        }
        return allUsers
    }
)

export const exploreSlice = createSlice({
    name: "explore",
    initialState: {
        allProfiles: [],
        exploreStatus: "idle"
    },
    reducers: {},
    extraReducers: {
        [getAllUserProfiles.pending]: (state) => {
            state.exploreStatus = "loading"
        },
        [getAllUserProfiles.fulfilled]: (state, action) => {
            state.allProfiles = action.payload;
            state.exploreStatus = "dataReceived"
        },
        [getAllUserProfiles.rejected]: (state) => {
            state.exploreStatus = "error"
        }
    }
})

export default exploreSlice.reducer;
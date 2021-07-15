import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNotifications } from "../../services/notify.service";

export const getUserNotifications = createAsyncThunk(
    "notify.getUserNotifications",
    async() => {
        const allNotifications = await getNotifications();
        return allNotifications;
    }
)

export const notifySlice = createSlice({
    name: "notify",
    initialState: {
        notifyStatus: "idle",
        notifications: []
    },
    reducers: {},
    extraReducers: {
        [getUserNotifications.pending]: (state) => {
            state.notifyStatus = "loading"
        },
        [getUserNotifications.fulfilled]: (state, action) => {
            state.notifications = action.payload;
            state.notifyStatus = "Fulfilled"
        },
        [getUserNotifications.pending]: (state) => {
            state.notifyStatus = "error"
        },
    }
})

export default notifySlice.reducer;
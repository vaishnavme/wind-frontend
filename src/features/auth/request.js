import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URI } from "../../api";

export const loginUserWithCredentials = createAsyncThunk(
    "auth/loginUserWithCredentials",
    async ({ email, password }) => {
        try {
            const response = await axios.post(`${BASE_URI}/user/login`,{email, password});
            return response.data;
        } catch(error) {
            return error.response.data
        }
    }
);

export const signupUserWithCredentials = createAsyncThunk(
    'auth/signupUserWithCredentials',
    async ({ name, username, email, password }) => {
        try {
            const response = await axios.post(`${BASE_URI}/user/signup`, {
                name, username, email ,password
            })
            console.log(response)
            return response.data
        } catch(error) {
            return error.response.data
        }
    }
);

export const initializeAuthUser = createAsyncThunk(
    "auth/initializeAuthUser",
    async (userId) => {
        try {
            const response = await axios.get(`${BASE_URI}/user/profile/${userId}`);
            return response.data
        } catch(error) {
            return error.response.data
        }
    }
);

export const followUser = createAsyncThunk(
    "auth/followUser",
    async (profileId) => {
        try {
            const response = await axios.post(`${BASE_URI}/activity/follow/${profileId}`);
            return response.data;
        } catch(error) {
            return error.response.data
        }
    }
);

export const unFollowUser = createAsyncThunk(
    'auth/unFollowUser',
    async (profileId) => {
        try {
            const response = await axios.delete(`${BASE_URI}/activity/follow/${profileId}`);
            return response.data;
        } catch(error) {
            return error.response.data
        }
    }
);
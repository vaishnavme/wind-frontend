import axios from "axios"
import { BASE_URI } from "../api";

export const getProfile = async(username) => {
    try {
        const response = await axios.get(`${BASE_URI}/user/profile/${username}`);
        return response
    } catch(err) {
        console.log(err);
    }
}

export const updateProfile = async(profileUpdates) => {
    try {
        const response = await axios.post(`${BASE_URI}/user/profile`, {
            profileUpdates
        })
        return response
    } catch(err) {
        console.log(err);
    }
}

export const updatePassword = async({oldPassword, newPassword}) => {
    try {
        const response = await axios.post(`${BASE_URI}/user/account`, {
            oldPassword, newPassword
        })
        return response
    } catch(err) {
        console.log(err);
    }
}
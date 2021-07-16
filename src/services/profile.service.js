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
//follow and unfollow
export const followUserProfile = async(profileId) => {
    try {// eslint-disable-next-line
        const {data: {success, message, followedId}} = await axios.post(`${BASE_URI}/activity/follow/${profileId}`);
        if(success) {
            return followedId
        } 
    } catch(err) {
        console.log(err);
    }
}

export const unFollowUserProfile = async(profileId) => {
    try {// eslint-disable-next-line
        const {data: {success, message, unfollowedId}} = await axios.delete(`${BASE_URI}/activity/follow/${profileId}`);
        if(success) {
            return unfollowedId
        } 
    } catch(err) {
        console.log(err);
    }
}
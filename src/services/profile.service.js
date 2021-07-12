import axios from "axios"

export const getProfile = async(profileId) => {
    try {
        const response = await axios.get(`/user/profile/${profileId}`);
        return response
    } catch(err) {
        console.log(err);
    }
}

export const updateProfile = async(profileUpdates) => {
    try {
        const response = await axios.post(`/user/profile`, {
            profileUpdates
        })
        return response
    } catch(err) {
        console.log(err);
    }
}

export const updatePassword = async({oldPassword, newPassword}) => {
    try {
        const response = await axios.post(`/user/account`, {
            oldPassword, newPassword
        })
        return response
    } catch(err) {
        console.log(err);
    }
}
//follow and unfollow
export const followUserProfile = async(profileId) => {
    try {
        const response = await axios.post(`/activity/follow/${profileId}`);
        return response
    } catch(err) {
        console.log(err);
    }
}

export const unFollowUserProfile = async(profileId) => {
    try {
        const response = await axios.delete(`/activity/follow/${profileId}`);
        return response
    } catch(err) {
        console.log(err);
    }
}
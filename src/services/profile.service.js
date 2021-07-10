import axios from "axios"

export const getProfile = async(profileId) => {
    try {
        const response = await axios.get(`/user/profile/${profileId}`);
        console.log(response)
        return response
    } catch(err) {
        console.log(err);
    }
}
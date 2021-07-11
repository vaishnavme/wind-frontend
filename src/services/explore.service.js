import axios from "axios";

export const getAllProfiles = async() => {
    try {
        const response = await axios.get(`/user/profiles`);
        return response
    } catch(err) {
        console.log(err);
    }
}
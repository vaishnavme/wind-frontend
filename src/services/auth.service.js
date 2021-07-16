import axios from "axios";
import { BASE_URI } from "../api";

export const logInUser = async({email, password}) => {
    const response = await axios.post(`${BASE_URI}/user/login`, {
            email, 
            password
    });
    return response;
}

export const signUpUser = async ({name, username, email, password}) => {
    const response = await axios.post(`${BASE_URI}/user/signup`, {
        name, username, email ,password
    })
    console.log(response)
    return response;
}

export const getAuthProfile = async(profileId) => {
    try {
        const response = await axios.get(`${BASE_URI}/user/profile/${profileId}`);
        return response
    } catch(err) {
        console.log(err);
    }
}
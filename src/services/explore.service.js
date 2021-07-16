import axios from "axios";
import { BASE_URI } from "../api";

export const getAllProfiles = async() => {
    try {
        const response = await axios.get(`${BASE_URI}/user/profiles`);
        return response
    } catch(err) {
        console.log(err);
    }
}
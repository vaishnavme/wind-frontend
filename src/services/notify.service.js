import axios from "axios";
import { BASE_URI } from "../api";

export const getNotifications = async() => {
    try {
        const {data: {success, allNotifications}} = await axios.get(`${BASE_URI}/activity/notify`)
        if(success) {
            return allNotifications
        }
    } catch(err) {
        console.log(err)
    }
}
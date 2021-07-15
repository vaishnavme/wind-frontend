import axios from "axios";

export const getNotifications = async() => {
    try {
        const {data: {success, allNotifications}} = await axios.get(`/activity/notify`)
        if(success) {
            return allNotifications
        }
    } catch(err) {
        console.log(err)
    }
}
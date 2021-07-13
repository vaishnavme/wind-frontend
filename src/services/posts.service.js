import axios from "axios";

export const createPost = async(post) => {
    try {
        const response = await axios.post(`/posts`, {post})
        return response
    } catch(err) {
        console.log(err);
    }
}

export const getUserFeed = async() => {
    try {
        const {data: {success, message, userFeed}} = await axios.get(`/posts/feed`);
        if(success) {
            return userFeed
        }
    } catch(err) {
        console.log(err);
    }
}
import axios from "axios";

export const createPost = async(post) => {
    try {
        const {data: {success, message, savedPost}} = await axios.post(`/posts`, {post})
        if(success) {
            return savedPost
        }
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
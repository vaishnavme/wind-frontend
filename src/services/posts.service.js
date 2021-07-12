import axios from "axios";

export const createPost = async(post) => {
    try {
        const response = await axios.post(`/posts`, {post})
        return response
    } catch(err) {
        console.log(err);
    }
}
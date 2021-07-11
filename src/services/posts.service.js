import axios from "axios";

export const makePost = async(post) => {
    try {
        const response = await axios.post(`/posts`, {post})
        return response
    } catch(err) {
        console.log(err);
    }
}
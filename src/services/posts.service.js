import axios from "axios";

export const createPost = async(post) => {
    try {// eslint-disable-next-line
        const {data: {success, message, savedPost}} = await axios.post(`/posts`, {post})
        if(success) {
            return savedPost
        }
    } catch(err) {
        console.log(err);
    }
}

export const getUserFeed = async() => {
    try {// eslint-disable-next-line
        const {data: {success, message, userFeed}} = await axios.get(`/posts/feed`);
        if(success) {
            return userFeed
        }
    } catch(err) {
        console.log(err);
    }
}

export const likePostById = async(postId) => {
    try {// eslint-disable-next-line
        const {data: {success, message, postLiked}} = await axios.post(`/posts/like/${postId}`);
        if(success) {
            console.log(postLiked);
            return postLiked
        }
    } catch(err) {
        console.log(err);
    }
}

export const unLikePostById = async(postId) => {
    try {// eslint-disable-next-line
        const {data: {success, message, postUnLiked}} = await axios.delete(`/posts/like/${postId}`);
        if(success) {
            console.log(postUnLiked);
            return postUnLiked
        }
    } catch(err) {
        console.log(err);
    }
}
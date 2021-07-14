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
        const {data: {success, message, postLiked}} = await axios.post(`/activity/like/${postId}`);
        if(success) {
            return postLiked
        }
    } catch(err) {
        console.log(err);
    }
}

export const unLikePostById = async(postId) => {
    try {// eslint-disable-next-line
        const {data: {success, message, postUnLiked}} = await axios.delete(`/activity/like/${postId}`);
        if(success) {
            return postUnLiked
        }
    } catch(err) {
        console.log(err);
    }
}

export const bookmarkPostById = async(postId) => {
    try {
        const {data: {success, message, bookmarkId}} = await axios.post(`/activity/bookmark/${postId}`);
        if(success) {
            return bookmarkId
        }
    } catch(err) {
        console.log(err);
    }
}

export const unBookmarkPostById = async(postId) => {
    try {
        const {data: {success, message, unBookmarkId}} = await axios.delete(`/activity/bookmark/${postId}`);
        if(success) {
            return unBookmarkId
        }
    } catch(err) {
        console.log(err);
    }
}
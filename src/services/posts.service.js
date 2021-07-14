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

export const deleteUserPostById = async(postId) => {
    try {
        const { data: {success, message, deletedId}} = await axios.delete(`/posts/${postId}`);
        if(success) {
            return deletedId
        }
    } catch(err) {
        console.log(err);
    }
}

export const loadSinglePost = async(postId) => {
    try {
        const {data: {success, post, message}} = await axios.get(`/posts/single/${postId}`)
        if(success) {
            return post
        }
    } catch(err) {
        console.log(err);
    }
}

export const postUserComment = async({postId, comment}) => {
    try {
        const {data: {success, commented}} = await axios.post(`/activity/comment/${postId}`, {
            comment
        })
        if(success) {
            return commented
        }
    } catch(err) {
        console.log(err);
    }
}

export const deleteUserComment = async({postId, commentID}) => {
    try {
        const {data: {success, commentId}} = await axios.delete(`/activity/comment/${postId}/${commentID}`)
        console.log(commentId);
        if(success) {
            return commentId
        }
    } catch(err) {
        console.log(err);
    }
}
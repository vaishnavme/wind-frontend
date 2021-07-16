import axios from "axios";
import { BASE_URI } from "../api";

export const createPost = async(post) => {
    try {// eslint-disable-next-line
        const {data: {success, message, savedPost}} = await axios.post(`${BASE_URI}/posts`, {post})
        if(success) {
            return savedPost
        }
    } catch(err) {
        console.log(err);
    }
}

export const getUserFeed = async() => {
    try {// eslint-disable-next-line
        const {data: {success, message, userFeed}} = await axios.get(`${BASE_URI}/posts/feed`);
        if(success) {
            return userFeed
        }
    } catch(err) {
        console.log(err);
    }
}

export const likePostById = async(postId) => {
    try {// eslint-disable-next-line
        const {data: {success, message, postLiked}} = await axios.post(`${BASE_URI}/activity/like/${postId}`);
        if(success) {
            return postLiked
        }
    } catch(err) {
        console.log(err);
    }
}

export const unLikePostById = async(postId) => {
    try {// eslint-disable-next-line
        const {data: {success, message, postUnLiked}} = await axios.delete(`${BASE_URI}/activity/like/${postId}`);
        if(success) {
            return postUnLiked
        }
    } catch(err) {
        console.log(err);
    }
}

export const deleteUserPostById = async(postId) => {
    try {// eslint-disable-next-line
        const { data: {success, message, deletedId}} = await axios.delete(`${BASE_URI}/posts/${postId}`);
        if(success) {
            return deletedId
        }
    } catch(err) {
        console.log(err);
    }
}

export const loadSinglePost = async(postId) => {
    try {// eslint-disable-next-line
        const {data: {success, post, message}} = await axios.get(`${BASE_URI}/posts/single/${postId}`)
        if(success) {
            return post
        }
    } catch(err) {
        console.log(err);
    }
}

export const postUserComment = async({postId, comment}) => {
    try {
        const {data: {success, commented}} = await axios.post(`${BASE_URI}/activity/comment/${postId}`, {
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
        const {data: {success, commentId}} = await axios.delete(`${BASE_URI}/activity/comment/${postId}/${commentID}`)
        if(success) {
            return commentId
        }
    } catch(err) {
        console.log(err);
    }
}
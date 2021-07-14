import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPost, getUserFeed, likePostById, unLikePostById } from "../../services/posts.service";

export const createNewPost = createAsyncThunk(
    "posts/createNewPost",
    async(post) => {
        const savedPost = await createPost(post);
        return savedPost;
    }
)

export const getFeed = createAsyncThunk(
    "posts/getFeed",
    async() => {
        const userFeed = await getUserFeed();
        return userFeed;
    }
)

export const likePost = createAsyncThunk(
    "auth/likePost",
    async(postId) => {
      const postLiked = await likePostById(postId);
      console.log(postLiked)
      return postLiked
    }
)

export const unLikePost = createAsyncThunk(
    "auth/unLikePost",
    async(postId) => {
      const postLiked = await unLikePostById(postId);
      console.log(postLiked)
      return postLiked
    }
)

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        allPosts: [],
        postStatus: "idle"
    },
    reducers: {},
    extraReducers: {
        [getFeed.pending]: (state) => {
            state.postStatus = "loading"
        },
        [getFeed.fulfilled]: (state, action) => {
            state.allPosts = action.payload
            state.postStatus = "feedLoaded"
        },
        [getFeed.rejected]: (state) => {
            state.postStatus = "error"
        },

        [createNewPost.pending]: (state) => {
            state.postStatus = "posting"
        },
        [createNewPost.fulfilled]: (state, action) => {
            state.allPosts = [action.payload, ...state.allPosts]
            state.postStatus = "posted"
        },
        [createNewPost.rejected]: (state) => {
            state.postStatus = "error"
        },

        [likePost.pending]: (state) => {
            state.postStatus = "liking post"
        },
        [likePost.fulfilled]: (state, action) => {
            const { postId, likedBy } = action.payload;
            const requiredPost = state.allPosts.find((post) => post._id === postId)
            requiredPost.likes.push(likedBy)
            state.postStatus ="liked"
        },
        [likePost.rejected]: (state) => {
            state.postStatus = "error";
        },

        [unLikePost.pending]: (state) => {
            state.postStatus = "unliking post"
        },
        [unLikePost.fulfilled]: (state, action) => {
            const { postId, unlikedBy } = action.payload;
            const requiredPost = state.allPosts.find((post) => post._id === postId)
            requiredPost.likes.splice(requiredPost.likes.indexOf(unlikedBy), 1);
            state.postStatus ="liked"
        },
        [unLikePost.rejected]: (state) => {
            state.postStatus = "error";
        }
    }
})

export default postsSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPost } from "../../services/posts.service";

export const createNewPost = createAsyncThunk(
    "posts/createNewPost",
    async(post) => {
        const {data: {success, savedPost, message}} = await createPost(post);
        if(!success) {
            throw Error(message)
        }
        return savedPost;
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
        [createNewPost.pending]: (state) => {
            state.postStatus = "posting"
        },
        [createNewPost.fulfilled]: (state, action) => {
            state.allPosts.push(action.payload);
            state.postStatus = "posted"
        },
        [createNewPost.rejected]: (state) => {
            state.postStatus = "error"
        }

    }
})

export default postsSlice.reducer;
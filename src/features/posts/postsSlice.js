import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPost, getUserFeed, likePostById, unLikePostById, 
    deleteUserPostById, loadSinglePost, postUserComment, deleteUserComment 
} from "../../services/posts.service";

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
    "posts/likePost",
    async(postId) => {
      const postLiked = await likePostById(postId);
      return postLiked
    }
)

export const unLikePost = createAsyncThunk(
    "posts/unLikePost",
    async(postId) => {
      const postLiked = await unLikePostById(postId);
      return postLiked
    }
)

export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async(postId) => {
      const deletedId = await deleteUserPostById(postId);
      return deletedId
    }
)

export const getSinglePost = createAsyncThunk(
    "posts/getSinglePost",
    async(postId) => {
        const post = await loadSinglePost(postId);
        return post;
    }
)

export const postComment = createAsyncThunk(
    "posts/postComment",
    async({postId, comment}) => {
        const commented = await postUserComment({postId, comment});
        return commented;
    }
)

export const deleteComment = createAsyncThunk(
    "posts/deleteComment",
    async(variable) => {
        const commentId = await deleteUserComment(variable);
        return commentId
    }
)

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        allPosts: [],
        singlePost: null,
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

        [getSinglePost.pending]: (state) => {
            state.postStatus = "post-loading"
        },
        [getSinglePost.fulfilled]: (state, action) => {
            state.singlePost = action.payload
            state.postStatus = "postLoaded"
        },
        [getSinglePost.rejected]: (state) => {
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
        },

        [deletePost.pending]: (state) => {
            state.postStatus = "loading"
        },
        [deletePost.fulfilled]: (state, action) => {
            state.allPosts.splice(state.allPosts.indexOf(action.payload), 1);
            state.postStatus = "Fulfilled"
        },
        [deletePost.rejected]: (state) => {
            state.postStatus = "rejected"
        },

        [postComment.pending]: (state) => {
            state.postStatus = "commenting"
        },
        [postComment.fulfilled]: (state, action) => {
            state.singlePost.comments.push(action.payload)
            state.postStatus = "Fulfilled"
        },
        [postComment.rejected]: (state) => {
            state.postStatus = "rejected"
        },

        [deleteComment.pending]: (state) => {
            state.postStatus = "loading"
        },
        [deleteComment.fulfilled]: (state, action) => {
            state.singlePost.comments.splice(state.singlePost.comments.indexOf(action.payload), 1)
            state.postStatus = "Fulfilled"
        },
        [deleteComment.rejected]: (state) => {
            state.postStatus = "rejected"
        }
    }
})

export default postsSlice.reducer;
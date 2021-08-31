import { createSlice } from '@reduxjs/toolkit';
import {
    getUserProfile,
    updateUserProfile,
    updateUserPassword
} from './request';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profileStatus: 'idle',
        profile: null,
        error: null
    },
    reducers: {
        resetProfile: (state) => {
            state.profile = null;
            state.profileStatus = 'idle';
        },
        updateUserProfile: (state, action) => {
            const { profileUpdates } = action.payload;
            state.profile = {
                ...state.profile,
                profileUpdates
            };
        },
        updatePostOnProfile: (state, action) => {
            const updatedPost = action.payload;
            let indexOfPostInProfile = state.profile.posts.findIndex(
                (post) => post._id === updatedPost._id
            );
            state.profile.posts[indexOfPostInProfile] = updatedPost;
        }
    },
    extraReducers: {
        [getUserProfile.pending]: (state) => {
            state.profileStatus = 'loading';
        },
        [getUserProfile.fulfilled]: (state, action) => {
            const { profile } = action.payload;
            state.profile = profile;
            state.profileStatus = 'dataReceived';
        },
        [getUserProfile.rejected]: (state, action) => {
            state.error = action.payload;
            state.profileStatus = 'error';
        },

        [updateUserProfile.pending]: (state) => {
            state.profileStatus = 'updating';
        },
        [updateUserProfile.fulfilled]: (state, action) => {
            const { updatedUserProfile } = action.payload;
            state.profile = {
                ...state.profile,
                ...updatedUserProfile
            };
            state.profileStatus = 'dataReceived';
        },
        [updateUserProfile.rejected]: (state) => {
            state.profileStatus = 'error';
        },

        [updateUserPassword.pending]: (state) => {
            state.profileStatus = 'updating password';
        },
        [updateUserPassword.fulfilled]: (state) => {
            state.profileStatus = 'Fulfilled';
        },
        [updateUserPassword.pending]: (state) => {
            state.profileStatus = 'error';
        }
    }
});

export const { resetProfile, updatePostOnProfile } = profileSlice.actions;

export default profileSlice.reducer;

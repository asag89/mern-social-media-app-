
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios"

const initialState = {
    comments: [],
    isLoading: false,
    isError: false,
    message: ""
}

export const createComment = createAsyncThunk("post/createComment", async ({ text, postId }, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post(`/api/comments/${postId}`, { text }, config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getComments = createAsyncThunk("post/getComments", async (postId, thunkAPI) => {
    try {
        const { data } = await axios.get(`/api/comments/${postId}`)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: {

        // create comment
        [createComment.pending]: (state) => {
            state.isLoading = true
        },
        [createComment.fulfilled]: (state, action) => {
            state.isLoading = false
            state.comments.unshift(action.payload)
        },
        [createComment.rejected]: (state, action) => {
            state.isLoading = false
            state.error = true
            state.message = action.payload
        },

        // get comments
        [getComments.pending]: (state) => {
            state.isLoading = true
        },
        [getComments.fulfilled]: (state, action) => {
            state.isLoading = false
            state.comments = action.payload
        },
        [getComments.rejected]: (state, action) => {
            state.isLoading = false
            state.error = true
            state.message = action.payload
        },
    }
})

export default commentSlice.reducer
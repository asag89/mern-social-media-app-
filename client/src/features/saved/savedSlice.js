
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const savedPostIds = JSON.parse(localStorage.getItem("sPosts"))

const initialState = {
    savedPostIds: savedPostIds || [],
    savedPosts: [],
    isLoading: false,
    isError: false,
    message: ""
}

// save post
export const savePost = createAsyncThunk("saved/savePost", async (postId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.put(`/api/users/save/${postId}`, "_", config)
        if (data) {
            localStorage.setItem("sPosts", JSON.stringify(data))
        }
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

// get saved post ids
export const getSavedPostIds = createAsyncThunk("saved/getSavedPostIds", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get("/api/posts/savedIds", config)
        if (data) {
            localStorage.setItem("sPosts", JSON.stringify(data))
        }
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getSavedPosts = createAsyncThunk("saved/getSavedPosts", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get("/api/posts/savedPosts", config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const savedSlice = createSlice({
    name: "saved",
    initialState,
    reducers: {
        clearSavedState: (state) => {
            state.savedPostIds = []
            state.savedPosts = []
        }
    },
    extraReducers: {

        // save post
        [savePost.pending]: (state) => {
            state.isLoading = true
        },
        [savePost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.savedPostIds = action.payload
        },
        [savePost.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        // get saved post ids
        [getSavedPostIds.pending]: (state) => {
            state.isLoading = true
        },
        [getSavedPostIds.fulfilled]: (state, action) => {
            state.isLoading = false
            state.savedPostIds = action.payload
        },
        [getSavedPostIds.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // get saved posts
        [getSavedPosts.pending]: (state) => {
            state.isLoading = true
        },
        [getSavedPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.savedPosts = action.payload
        },
        [getSavedPosts.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },
    }
})

export const { clearSavedState } = savedSlice.actions

export default savedSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    post: {},
    isLoading: false,
    isError: false,
    message: "",
    usersWhoLikes: []
}

export const createPost = createAsyncThunk("post/createPost", async (post, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post("/api/posts", post, config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getTimelinePosts = createAsyncThunk("post/getTimelinePosts", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get("/api/posts/timeline", config)
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getPosts = createAsyncThunk("post/getPosts", async (username, thunkAPI) => {
    try {
        const { data } = await axios(`/api/posts/${username}`)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getAllPosts = createAsyncThunk("post/getAllPosts", async (_, thunkAPI) => {
    try {
        const { data } = await axios(`/api/posts/all`)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getSinglePost = createAsyncThunk("post/getSinglePost", async (postId, thunkAPI) => {
    try {
        const { data } = await axios(`/api/posts/p/${postId}`)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getPostLikes = createAsyncThunk("post/getPostLikes", async (postId, thunkAPI) => {
    try {
        const { data } = await axios(`/api/posts/getPostlikes/${postId}`)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const deletePost = createAsyncThunk("post/deletePost", async (postId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.delete(`/api/posts/${postId}`, config)
        return data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPost: (state, action) => {
            state.post = action.payload
        },
        clearPostState: (state) => {
            state.posts = []
            state.post = {}
            state.isLoading = false
            state.isError = false
            state.message = ""
        }
    },

    extraReducers: {

        // create post
        [createPost.pending]: (state) => {
            state.isLoading = true
        },
        [createPost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts.unshift(action.payload)
        },
        [createPost.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // get timeline posts
        [getTimelinePosts.pending]: (state) => {
            state.isLoading = true
        },
        [getTimelinePosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        },
        [getTimelinePosts.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // get all posts
        [getAllPosts.pending]: (state) => {
            state.isLoading = true
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        [getPosts.pending]: (state) => {
            state.isLoading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        },
        [getPosts.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        [getSinglePost.pending]: (state) => {
            state.isLoading = true
        },
        [getSinglePost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.post = action.payload
        },
        [getSinglePost.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        [getPostLikes.fulfilled]: (state, action) => {
            state.usersWhoLikes = action.payload
        },
        [getPostLikes.rejected]: (state, action) => {
            state.isError = true
            state.message = action.payload
        },

        // delete post
        [deletePost.pending]: (state) => {
            state.isLoading = true
        },
        [deletePost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = state.posts.filter((post) => post._id !== action.payload)
            state.post = {}
        },
        [deletePost.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        }
    }
})

export const {
    getPost,
    clearPostState
} = postSlice.actions
export default postSlice.reducer

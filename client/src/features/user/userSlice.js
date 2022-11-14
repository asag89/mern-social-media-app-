
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: [],
    userProfile: null,
    followings: [],
    followers: [],
    data: [],
    isLoading: false,
    isError: false,
    message: ""
}

export const getUser = createAsyncThunk("users/getUser", async (username, thunkAPI) => {
    try {
        const { data } = await axios.get(`/api/users/getUser/${username}`)
        if (data) {
            thunkAPI.dispatch(getFollowers(data._id))
            thunkAPI.dispatch(getFollowings(data._id))
        }
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getFollowers = createAsyncThunk("user/getFollowers", async (ids, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get(`/api/users/followers/${ids}`, "_", config)     // "_" placeholder
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getFollowings = createAsyncThunk("user/getFollowings", async (ids, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get(`/api/users/followings/${ids}`, "_", config)     // "_" placeholder
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getProfile: (state, action) => {
            state.userProfile = action.payload
        },
        clearUserState: (state) => {
            state.users = []
            state.userProfile = null
            state.followings = []
            state.followers = []
            state.data = []
        }
    },
    extraReducers: {

        [getUser.pending]: (state) => {
            state.isLoading = true
        },
        [getUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.userProfile = action.payload
        },
        [getUser.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // get followers
        [getFollowers.pending]: (state) => {
            state.isLoading = true
        },
        [getFollowers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.followers = action.payload

        },
        [getFollowers.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // get followings
        [getFollowings.pending]: (state) => {
            state.isLoading = true
        },
        [getFollowings.fulfilled]: (state, action) => {
            state.isLoading = false
            state.followings = action.payload
        },
        [getFollowings.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },
    }
})

export const { getProfile, clearUserState } = userSlice.actions
export default userSlice.reducer


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { osName, browserName } from "react-device-detect"

import axios from "axios"
import { clearLoginActivityState, saveActivity } from "../loginActivity/loginActivitySlice";
import { clearPostState } from "../post/postSlice";
import { clearSavedState } from "../saved/savedSlice";
import { clearSearchState } from "../search/searchSlice";
import { clearUserState } from "../user/userSlice";
import { clearModalState } from "../modal/modalSlice";

const user = JSON.parse(localStorage.getItem("user"))
const currentUserFollowers = JSON.parse(localStorage.getItem("follower"))
const currentUserfollowings = JSON.parse(localStorage.getItem("following"))
const currentUserLikes = JSON.parse(localStorage.getItem("likes"))

const initialState = {
    user: user ? user : null,
    currentUserFollowers: currentUserFollowers || [],
    currentUserfollowings: currentUserfollowings || [],
    userLikes: currentUserLikes || [],
    recommendedUsers: [],
    isLoading: false,
    isError: false,
    message: "",
    showNavbarDropdown: false,
    isPassword: false
}

export const register = createAsyncThunk("currentUser/register", async (user, thunkAPI) => {
    try {
        const { data } = await axios.post("/api/users/register", user)
        if (data) {
            localStorage.setItem("following", JSON.stringify(data.followings))
            localStorage.setItem("follower", JSON.stringify(data.followers))
            localStorage.setItem("likes", JSON.stringify(data.likes))
            delete data.followings
            delete data.followers
            localStorage.setItem("user", JSON.stringify(data))
        }
        thunkAPI.dispatch(saveActivity({
            userId: data._id,
            osName,
            browserName
        }))
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const login = createAsyncThunk("currentUser/login", async (user, thunkAPI) => {
    try {
        const { data } = await axios.post("/api/users/login", user)
        if (data) {
            localStorage.setItem("following", JSON.stringify(data.followings))
            localStorage.setItem("follower", JSON.stringify(data.followers))
            localStorage.setItem("likes", JSON.stringify(data.likes))
            localStorage.setItem("user", JSON.stringify(data))

            thunkAPI.dispatch(saveActivity({
                userId: data._id,
                osName,
                browserName
            }))
        }
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const update = createAsyncThunk("currentUser/update", async (updatedUser, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.put("/api/users/updateUser", updatedUser, config)
        if (data) {
            localStorage.setItem("user", JSON.stringify(data))
        }
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const followUnfollow = createAsyncThunk("currentUser/followUnfollow", async (userId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.put(`/api/users/follow/${userId}`, "_", config)     // "_" placeholder
        if (data) {
            localStorage.setItem("following", JSON.stringify(data))
        }
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getSuggestions = createAsyncThunk("currentUser/getSuggestions", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get("/api/users/suggestions", config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


export const likeUnlike = createAsyncThunk("currentUser/likeUnlike", async (postId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.put(`/api/posts/likes/${postId}`, "_", config)
        if (data) {
            localStorage.setItem("likes", JSON.stringify(data.userLikes))
        }
        return data.userLikes
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getUserLikedPosts = createAsyncThunk("saved/getUserLikedPosts", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get("/api/users/getUserLikedPosts", config)
        if (data) {
            localStorage.setItem("likes", JSON.stringify(data))
        }
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const changePassword = createAsyncThunk("currentUser/changePassword", async (passwords, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.put("/api/users/changePassword", passwords, config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const confirmPassword = createAsyncThunk("currentUser/confirmPassword", async (password, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post("/api/users/confirmPassword", password, config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const deleteAccount = createAsyncThunk("currentUser/deleteAccount", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.delete("/api/users/deleteAccount", config)
        if (data) {
            thunkAPI.dispatch(logout())
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


export const logout = createAsyncThunk("currentUser/logout", async (_, thunkAPI) => {
    localStorage.removeItem('user')
    localStorage.removeItem('follower')
    localStorage.removeItem('following')
    localStorage.removeItem('sPosts')
    localStorage.removeItem('likes')

    thunkAPI.dispatch(clearLoginActivityState())
    thunkAPI.dispatch(clearPostState())
    thunkAPI.dispatch(clearSavedState())
    thunkAPI.dispatch(clearSearchState())
    thunkAPI.dispatch(clearUserState())
    thunkAPI.dispatch(clearModalState())
})




const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        getError: (state, action) => {
            state.isError = true
            state.message = action.payload
        },
        clearError: (state) => {
            state.isError = false
            state.message = ""
        },

        cancelDeletion: (state) => {
            state.isPassword = false
        },

        navbarDropdown: (state) => {
            state.showNavbarDropdown = !state.showNavbarDropdown
        },
        getlikes: (state, action) => {
            state.likes = action.payload
        },
    },
    extraReducers: {
        // register
        [register.pending]: (state) => {
            state.isLoading = true
        },
        [register.fulfilled]: (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.currentUserFollowers = action.payload.followers
            state.currentUserfollowings = action.payload.followings
            state.userLikes = action.payload.likes
            state.isError = false
            state.message = ""
        },
        [register.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        },

        // login
        [login.pending]: (state) => {
            state.isLoading = true
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.currentUserFollowers = action.payload.followers
            state.currentUserfollowings = action.payload.followings
            state.userLikes = action.payload.likes
            state.isError = false
            state.message = ""
        },

        [login.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        },

        // update
        [update.pending]: (state) => {
            state.isLoading = true
        },
        [update.fulfilled]: (state, action) => {
            state.isLoading = false
            state.user = action.payload
        },
        [update.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        },

        [followUnfollow.pending]: (state) => {
            state.isLoading = true
        },

        [followUnfollow.fulfilled]: (state, action) => {
            state.isLoading = false
            state.currentUserfollowings = action.payload
            state.message = action.payload.msg
        },

        [followUnfollow.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        [getSuggestions.pending]: (state) => {
            state.isLoading = true
        },

        [getSuggestions.fulfilled]: (state, action) => {
            state.isLoading = false
            state.recommendedUsers = action.payload
        },

        [getSuggestions.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // like / unlike post
        [likeUnlike.fulfilled]: (state, action) => {
            state.userLikes = action.payload
        },
        [likeUnlike.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        [getUserLikedPosts.fulfilled]: (state, action) => {
            state.userLikes = action.payload
        },
        [getUserLikedPosts.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // change password
        [changePassword.pending]: (state) => {
            state.isLoading = true
        },
        [changePassword.fulfilled]: (state, action) => {
            state.isLoading = false
            state.message = action.payload
        },
        [changePassword.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        },

        [confirmPassword.pending]: (state) => {
            state.isLoading = true
        },
        [confirmPassword.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isPassword = action.payload
        },
        [confirmPassword.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // logout
        [logout.fulfilled]: (state, action) => {
            state.user = null
            state.currentUserFollowers = []
            state.currentUserfollowings = []
            state.userLikes = []
            state.recommendedUsers = []
            state.isLoading = false
            state.isError = false
            state.message = ""
            state.isPassword = false
            state.showNavbarDropdown = false
        }
    }
})

export const {
    getError,
    clearError,
    navbarDropdown,
    getlikes,
    cancelDeletion
} = currentUserSlice.actions

export default currentUserSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    loginActivity: [],
    type: null,
    isLoading: false,
    isError: false,
    message: "",
    activityId: null
}

export const saveActivity = createAsyncThunk("loginActivity/saveActivity", async (user, thunkAPI) => {
    try {
        const { data } = await axios.post("/api/activity/saveActivity", user)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


export const getLoginActivity = createAsyncThunk("loginActivity/getLoginActivity", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get("/api/activity/getLoginActivity", config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const confirmActivity = createAsyncThunk("loginActivity/confirmActivity", async (confirm, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.put(`/api/activity/confirmActivity`, confirm, config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

const loginActivitySlice = createSlice({
    name: "loginActivity",
    initialState,
    reducers: {
        handleActivityVerification: (state, action) => {
            state.type = action.payload.type
            state.activityId = action.payload.activityId
        },
        clearLoginActivityState: (state) => {
            state.loginActivity = []
            state.type = null
            state.isLoading = false
            state.isError = false
            state.message = ""
            state.activityId = null
        }
    },
    extraReducers: {

        // save user's login activity
        [saveActivity.pending]: (state) => {
            state.isLoading = true
        },
        [saveActivity.fulfilled]: (state, action) => {
            state.isLoading = false
        },
        [saveActivity.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // get user's login activity
        [getLoginActivity.pending]: (state) => {
            state.isLoading = true
        },
        [getLoginActivity.fulfilled]: (state, action) => {
            state.isLoading = false
            state.loginActivity = action.payload
        },
        [getLoginActivity.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // confirm activity
        [confirmActivity.pending]: (state) => {
            state.isLoading = true
        },
        [confirmActivity.fulfilled]: (state, action) => {
            state.isLoading = false
            state.loginActivity = action.payload
        },
        [confirmActivity.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },
    }
})

export const {
    handleActivityVerification,
    clearLoginActivityState
} = loginActivitySlice.actions

export default loginActivitySlice.reducer
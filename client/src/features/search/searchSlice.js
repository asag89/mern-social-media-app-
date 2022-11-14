
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: [],
    showSearchDropdown: false,
    searchedUser: [],
    isLoading: false,
    isError: false,
    message: ""
}

export const getSearchResults = createAsyncThunk("search/getSearchResults", async (username, thunkAPI) => {
    try {
        const { data } = await axios.get(`/api/users/getSearchResults?username=${username}`,)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getSearchHistory = createAsyncThunk("search/getSearchHistory", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.get("/api/users/searchHistory", config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const addSearchItem = createAsyncThunk("search/addSearchItem", async (userId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.put(`/api/users/searchHistory/${userId}`, "_", config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const deleteSearchItem = createAsyncThunk("search/deleteSearchItem", async (userId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().currentUser.user.token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.delete(`/api/users/searchHistory/${userId}`, config)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchDropdown: (state) => {
            state.showSearchDropdown = !state.showSearchDropdown
        },
        clearSearchState: (state) => {
            state.searchedUser = []
            state.users = []
        }
    },
    extraReducers: {

        [getSearchResults.pending]: (state) => {
            state.isLoading = true
        },
        [getSearchResults.fulfilled]: (state, action) => {
            state.isLoading = false
            state.searchedUser = action.payload
        },
        [getSearchResults.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // get Search History
        [getSearchHistory.pending]: (state) => {
            state.isLoading = true
        },
        [getSearchHistory.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
        },
        [getSearchHistory.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // add Search item
        [addSearchItem.pending]: (state) => {
            state.isLoading = true
        },
        [addSearchItem.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users.unshift(action.payload)
        },
        [addSearchItem.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },

        // delete Search item
        [deleteSearchItem.pending]: (state) => {
            state.isLoading = true
        },
        [deleteSearchItem.fulfilled]: (state, action) => {
            state.isLoading = false
            if (action.payload === "all") {
                state.users = []
            }
            else {
                state.users = state.users.filter((item) => {
                    return item._id !== action.payload
                })
            }
        },
        [deleteSearchItem.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        }
    }
})

export const { searchDropdown, clearSearchState } = searchSlice.actions

export default searchSlice.reducer
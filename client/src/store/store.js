
import { configureStore } from "@reduxjs/toolkit"

import currentUserReducer from "../features/currentUser/currentUserSlice"
import postReducer from "../features/post/postSlice"
import userReducer from "../features/user/userSlice"
import commentReducer from "../features/comment/commentSlice"
import searchReducer from "../features/search/searchSlice"
import savedReducer from "../features/saved/savedSlice"
import modalReducer from "../features/modal/modalSlice"
import loginActivityReducer from "../features/loginActivity/loginActivitySlice"

const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        post: postReducer,
        user: userReducer,
        comment: commentReducer,
        search: searchReducer,
        saved: savedReducer,
        modal: modalReducer,
        loginActivity: loginActivityReducer
    }
})

export default store
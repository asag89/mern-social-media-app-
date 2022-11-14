
import express from "express"
const router = express.Router()

import {
    register,
    login,
    updateUser,
    changePassword,
    follow,
    getFollowers,
    getFollowings,
    getSearchResults,
    getUser,
    suggestions,
    getSearchHistory,
    addSearchItem,
    deleteSearchItem,
    saved,
    getUserLikedPosts,
    confirmPassword,
    deleteAccount
} from "../controllers/userController.js"

// user authorization
import auth from "../middleware/auth.js"


router.post("/register", register) // user register

router.post("/login", login)    // user login

router.put("/updateUser", auth, updateUser)     // update user

router.put("/follow/:id", auth, follow)     // follow unfollow

router.put("/changePassword", auth, changePassword)  // change user's password

router.get("/followers/:id", getFollowers)   // get users followers

router.get("/followings/:id", getFollowings)   // get user followings

router.get("/getUser/:username", getUser)    // get single user(user profile)

router.get("/suggestions", auth, suggestions)      // user suggestions

router.get("/searchHistory", auth, getSearchHistory)      // user search History

router.get("/getSearchResults", getSearchResults)   // get search results

router.put("/searchHistory/:itemId", auth, addSearchItem)   // add search item

router.delete("/searchHistory/:itemId", auth, deleteSearchItem)   // delete search item

router.put("/save/:postId", auth, saved) // user's saved posts (add or remove)

router.get("/getUserLikedPosts", auth, getUserLikedPosts) // get user liked posts

router.post("/confirmPassword", auth, confirmPassword) // confirm password for delete account

router.delete("/deleteAccount", auth, deleteAccount) //  delete account

export default router
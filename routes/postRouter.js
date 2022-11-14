
import express from "express"
const router = express.Router()

import {
    createPost,
    getPosts,
    getTimelinePosts,
    getAllPosts,
    getSinglePost,
    deletePost,
    getSavedPostIds,
    getSavedPosts,
    likes,
    getPostlikes
} from "../controllers/postController.js"

// user authorization
import auth from "../middleware/auth.js"

router.post("/", auth, createPost)    // create user

router.get("/timeline", auth, getTimelinePosts)    // timeline posts

router.get("/savedIds", auth, getSavedPostIds) // get user's saved post ids

router.get("/savedPosts", auth, getSavedPosts) // get user's saved posts

router.get("/all", getAllPosts)    // get user posts

router.get("/p/:postId", getSinglePost) // get single post

router.get("/:username", getPosts)    // get user posts

router.delete("/:postId", auth, deletePost)     // delete post

router.put("/likes/:postId", auth, likes) // like unlike

router.get("/getPostlikes/:postId", getPostlikes)    // get post's likes

export default router

import express from "express"
const router = express.Router()

import {
    createComment,
    getComments
} from "../controllers/commentController.js"

// user authorization
import auth from "../middleware/auth.js"

router.post("/:postId", auth, createComment) // create comment

router.get("/:postId", getComments) // get post's comments

export default router
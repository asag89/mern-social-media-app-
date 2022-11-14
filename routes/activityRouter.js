
import express from "express"
const router = express.Router()

import {
    saveActivity,
    getLoginActivity,
    confirmActivity
} from "../controllers/activityController.js"

// user authorization
import auth from "../middleware/auth.js"

router.post("/saveActivity", saveActivity) // save user's login activity

router.get("/getLoginActivity", auth, getLoginActivity) // get user's login activity

router.put("/confirmActivity", auth, confirmActivity) // confirm Activity

export default router

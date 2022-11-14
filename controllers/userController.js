
// packages
import { StatusCodes } from "http-status-codes"

// models
import User from "../models/User.js"
import Post from "../models/Post.js"
import Comment from "../models/Comment.js"
// errors
import BadRequestError from "../errors/badRequest.js"
import UnAuthenticatedError from "../errors/unAuthenticated.js"
import Activity from "../models/Activity.js"

// no need try-catch or etc, because using express-async-errors

// user register
const register = async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        throw new BadRequestError("Please provide all values")
    }

    const emailAlreadyExist = await User.findOne({ email })
    const usernameAlreadyExist = await User.findOne({ username })

    if (emailAlreadyExist) {
        throw new BadRequestError("Email already in use")
    }

    if (usernameAlreadyExist) {
        throw new BadRequestError("Username already in use")
    }

    const user = await User.create({ username, email, password })
    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        userPhoto: user.userPhoto,
        biography: user.biography,
        followers: user.followers,
        followings: user.followings,
        website: user.website,
        gender: user.gender,
        saved: user.saved,
        likes: user.likes,
        token,
    })
}

// login
const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw new BadRequestError("Please provide all values")
    }

    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        throw new UnAuthenticatedError("Please check your credentials.")
    }

    const isPassword = await user.comparePassword(password)

    if (!isPassword) {
        throw new UnAuthenticatedError("Please check your password")
    }

    const token = user.createJWT()

    res.status(StatusCodes.OK).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        userPhoto: user.userPhoto,
        biography: user.biography,
        followers: user.followers,
        followings: user.followings,
        website: user.website,
        gender: user.gender,
        saved: user.saved,
        likes: user.likes,
        token,
    })
}

// update user
const updateUser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.user._id,
        {
            $set: req.body
        }, {
        new: true
    })

    const token = updatedUser.createJWT()

    res.status(StatusCodes.OK).json({
        _id: updatedUser._id,
        username: updatedUser.username,
        name: updatedUser.name,
        email: updatedUser.email,
        website: updatedUser.website,
        biography: updatedUser.biography,
        gender: updatedUser.gender,
        userPhoto: updatedUser.userPhoto,
        followings: updatedUser.followings,
        followers: updatedUser.followers,
        saved: updatedUser.saved,
        token
    })
}

//! change password
const changePassword = async (req, res) => {

    const { oldPassword, newPassword } = req.body

    if (!oldPassword || !newPassword) {
        throw new BadRequestError("Please provide all values")
    }

    const user = await User.findById(req.user._id).select("+password")

    if (!user) {
        throw new UnAuthenticatedError("Please check your credentials.")
    }

    const isMatch = await user.comparePassword(oldPassword)

    if (!isMatch) {
        throw new BadRequestError("Your old password was entered incorrectly. Please enter it again.")

    }

    // unfinished
}


// follow / unfollow
const follow = async (req, res) => {

    const userId = req.user._id
    const followUserId = req.params.id

    const user = await User.findById(userId)
    const followUser = await User.findById(followUserId)

    if (!user.followings.includes(followUserId)) {
        await user.updateOne({ $push: { followings: followUserId } })
        await followUser.updateOne({ $push: { followers: userId } })
        res.status(200).json([followUserId, ...user.followings])

    }
    if (user.followings.includes(followUserId)) {
        await user.updateOne({ $pull: { followings: followUserId } })
        await followUser.updateOne({ $pull: { followers: userId } })

        const fs = user.followings.filter((item) => {
            return item !== followUserId
        })
        res.status(200).json(fs)
    }
}

// get followers
const getFollowers = async (req, res) => {
    const user = await User.findById(req.params.id)
    const followers = await User.find({ _id: { $in: [...user.followers] } }).select("_id username userPhoto name")
    res.status(StatusCodes.OK).json(followers)
}

// get followings
const getFollowings = async (req, res) => {
    const user = await User.findById(req.params.id)
    const followings = await User.find({ _id: { $in: [...user.followings] } }).select("_id username userPhoto name")
    res.status(StatusCodes.OK).json(followings)
}

const getUser = async (req, res) => {
    const { username } = req.params
    const user = await User.findOne({ username })
    res.status(StatusCodes.OK).json(user)
}

const suggestions = async (req, res) => {
    const users = await User.find({ _id: { $nin: [...req.user.followings, req.user.id] } }).select("-password").limit(5)
    res.status(StatusCodes.OK).json(users)
}

const getSearchHistory = async (req, res) => {
    const user = await User.findById(req.user._id)

    const history = await Promise.all(user.searchHistory.map((_id) => {
        return User.findById(_id).select("username name userPhoto")
    }))

    res.status(StatusCodes.OK).json(history)
}

const getSearchResults = async (req, res) => {
    const { username } = req.query
    const queryObject = {}

    if (username) {
        queryObject.username = { $regex: username, $options: "i" }
    }

    const users = await User.find(queryObject).select("username name userPhoto")
    res.status(StatusCodes.OK).json(users)
}

const addSearchItem = async (req, res) => {
    const { itemId } = req.params
    const user = await User.findById(req.user._id)

    const searchedUser = await User.findById(itemId).select("username name userPhoto")

    await user.updateOne({ $push: { searchHistory: itemId } })
    res.status(200).json(searchedUser)
}

const deleteSearchItem = async (req, res) => {
    const { itemId } = req.params
    const user = await User.findById(req.user._id).select("searchHistory")
    // if itemId equal "all" then delete all search items
    if (itemId === "*all") {
        await user.updateOne({ $pullAll: { searchHistory: user.searchHistory } })
        res.status(200).json("all")
    }
    else {
        await user.updateOne({ $pull: { searchHistory: itemId } })
        res.status(200).json(itemId)
    }
}

const saved = async (req, res) => {

    const { postId } = req.params
    const user = await User.findById(req.user._id)

    // if user's saveds not includes this post then add it
    if (!user.saved.includes(postId)) {
        await user.updateOne({ $push: { saved: postId } })
        res.status(200).json([postId, ...user.saved])
    }

    // if user's saveds includes this postId then remove it
    if (user.saved.includes(postId)) {
        await user.updateOne({ $pull: { saved: postId } })

        const saveds = user.saved.filter((item) => {
            return item !== postId
        })
        res.status(200).json(saveds)
    }
}

const getUserLikedPosts = async (req, res) => {
    const postIds = req.user.likes
    res.status(StatusCodes.OK).json(postIds)
}

const confirmPassword = async (req, res) => {

    const { password } = req.body
    const user = await User.findById(req.user._id).select("+password")
    const isPassword = await user.comparePassword(password)
    if (!isPassword) {
        throw new BadRequestError("Please check your password")
    }
    else {
        res.status(200).json(true)
    }

}

const deleteAccount = async (req, res) => {
    await Comment.deleteMany({ createdBy: req.user._id })

    const updateLikes = async (id) => {
        await Post.findByIdAndUpdate(id, { $pull: { likes: req.user._id } })
    }
    await req.user.likes.forEach((id) => {
        updateLikes(id)
    })

    const updateFollowers = async (id) => {
        await User.findOneAndUpdate({ _id: id }, { $pull: { followers: req.user._id } })
    }
    await req.user.followings.forEach((id) => {
        updateFollowers(id)
    })

    const updateFollowings = async (id) => {
        await User.findOneAndUpdate({ _id: id }, { $pull: { followings: req.user._id } })
    }
    await req.user.followers.forEach((id) => {
        updateFollowings(id)
    })

    await Post.findByIdAndUpdate(id, { $pull: { comments: req.user._id } })
    await Activity.deleteMany({ userId: req.user_id })
    await Post.deleteMany({ createdBy: req.user._id })
    await Comment.deleteMany({ createdBy: req.user._id })
    await User.findByIdAndDelete(req.user._id)
    res.status(200).json(true)
}

export {
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
    deleteSearchItem,
    addSearchItem,
    saved,
    getUserLikedPosts,
    confirmPassword,
    deleteAccount
}
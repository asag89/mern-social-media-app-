// packages
import { StatusCodes } from "http-status-codes"

// models
import User from "../models/User.js"
import Post from "../models/Post.js"
import Comment from "../models/Comment.js"

// errors
import BadRequestError from "../errors/badRequest.js"
import NotFoundError from "../errors/notFound.js"

// no need try-catch or etc, because using express-async-errors


const createPost = async (req, res) => {

    const { text, image } = req.body

    if (!text || !image) {
        throw new BadRequestError("Please provide all values")
    }

    const newPost = await Post.create({
        text,
        image,
        username: req.user.username,
        createdBy: req.user._id,
    })

    await newPost.populate("createdBy", "_id userPhoto username")
    res.status(StatusCodes.CREATED).json(newPost)
}


// get user posts
const getPosts = async (req, res) => {

    const { username } = req.params
    const posts = await Post.find({ username }).sort("-createdAt").select("-username").populate("createdBy", "_id username userPhoto likes")
    res.status(StatusCodes.OK).json(posts)
}

const getSinglePost = async (req, res) => {
    const { postId } = req.params
    const post = await Post.findOne({ _id: postId }).sort("-createdAt").select("-username").populate("createdBy", "_id username userPhoto likes")
    res.status(StatusCodes.OK).json(post)
}

// get timeline posts
const getTimelinePosts = async (req, res) => {

    const userIds = [req.user._id, ...req.user.followings]
    const followingsPosts = await Post.find({ createdBy: userIds }).sort("-createdAt").select("-username").populate("createdBy", "_id username userPhoto likes")

    res.status(StatusCodes.OK).json(followingsPosts)
}

// get explore posts
const getAllPosts = async (req, res) => {
    const posts = await Post.find({}).sort("-createdAt").select("-username").populate("createdBy", "_id username userPhoto")
    res.status(StatusCodes.OK).json(posts)
}

const deletePost = async (req, res) => {
    const { postId } = req.params
    const post = await Post.findById({ _id: postId })

    if (!post) {
        throw new NotFoundError(`No post with id: ${postId}`)
    }

    await Comment.deleteMany({ postId })
    await post.remove()
    res.status(StatusCodes.OK).json(postId)
}


const getSavedPostIds = async (req, res) => {

    const postIds = req.user.saved
    res.status(StatusCodes.OK).json(postIds)
}


const getSavedPosts = async (req, res) => {

    const postIds = req.user.saved
    const savedPosts = await Post.find({ _id: postIds }).sort("-createdAt")

    res.status(StatusCodes.OK).json(savedPosts)
}


// like / unlike
const likes = async (req, res) => {

    const userId = req.user._id
    const { postId } = req.params

    const user = await User.findById(req.user._id)
    const post = await Post.findById(postId)

    if (!post.likes.includes(userId)) {
        await post.updateOne({ $push: { likes: userId } })
        await user.updateOne({ $push: { likes: postId } })
        const userLikes = [postId, ...user.likes]
        const postLikes = [userId, ...post.likes]
        res.status(200).json({
            userLikes,
            postLikes
        })
    }

    if (post.likes.includes(userId)) {
        await post.updateOne({ $pull: { likes: userId } })
        await user.updateOne({ $pull: { likes: postId } })
        const userLikes = user.likes.filter((item) => {
            return item !== postId
        })
        const postLikes = user.likes.filter((item) => {
            return item !== userId
        })
        res.status(200).json({
            userLikes,
            postLikes
        })
    }
}

const getPostlikes = async (req, res) => {

    const { postId } = req.params
    //user's ids
    const usersIds = await Post.findById(postId).select("likes")

    const users = await User.find({ _id: usersIds.likes }).select("username name userPhoto")
    res.status(StatusCodes.OK).json(users)
}

export {
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
}
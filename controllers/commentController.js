
// models
import Comment from "../models/Comment.js"
import Post from "../models/Post.js"

// packages
import { StatusCodes } from "http-status-codes"

// errors
import BadRequestError from "../errors/badRequest.js"

// no need try-catch or etc, because using express-async-errors

const createComment = async (req, res) => {
    const { text } = req.body
    const { postId } = req.params

    if (!text) {
        throw new BadRequestError("Please provide text values")
    }

    const comment = await Comment.create({
        text,
        createdBy: req.user._id,
        postId
    })

    await Post.findById(postId).updateOne({ $push: { comments: req.user._id } })
    await comment.populate("createdBy", "_id userPhoto username")

    res.status(StatusCodes.CREATED).json(comment)
}

const getComments = async (req, res) => {
    const { postId } = req.params

    let comments = await Comment.find({ postId }).sort("-createdAt").populate("createdBy", "_id username userPhoto")
    res.status(StatusCodes.OK).json(comments)
}

export { createComment, getComments }
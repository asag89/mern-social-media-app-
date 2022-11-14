
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Post"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
)

export default mongoose.model("Comment", CommentSchema)
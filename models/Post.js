
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    username: {
        type: String,
        required: true,

    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
)

export default mongoose.model("Post", PostSchema)
import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    osName: {
        type: String,
        required: true
    },
    browserName: {
        type: String,
        required: true
    },
    isConfirmed: {
        type: Boolean,
        default: false,
        required: true
    }
},
    { timestamps: true }
)

export default mongoose.model("Activity", ActivitySchema)

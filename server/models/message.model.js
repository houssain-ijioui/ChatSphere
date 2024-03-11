import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const Message = mongoose.model('Message', messageSchema);

export default Message;
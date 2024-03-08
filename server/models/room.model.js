import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    messages: {
        type: []
    }
})


const Room = mongoose.model('Room', roomSchema);

export default Room;
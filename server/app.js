import { config } from "dotenv";
config();
import express from "express";
const app = express();
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import Message from "./models/message.model.js";

mongoose.connect(process.env.DB, console.log("DB Connected"));

const defaultRoom = 1223


app.use(cors());

app.get('/api/messages', async (req, res) => {
    const messages = await Message.find();
    res.send(messages)
})

const server = app.listen(4000, () => {
    console.log("Running On 4000");
})


const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: false
    }
})

io.on('connection', (socket) => {
    socket.on('join_room', (data) => {
        socket.join(defaultRoom)
        socket.to(defaultRoom).emit('user_joined', data.pseudoname)
    })

    socket.on('send_message', (data) => {
        socket.to(defaultRoom).emit("recieve_message", data)
    })

    socket.on('disconnect', () => {
        console.log("disconnected");
    })
})

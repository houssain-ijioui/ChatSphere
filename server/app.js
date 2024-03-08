import { config } from "dotenv";
config();
import express from "express";
const app = express();
import { Server } from "socket.io";
import mongoose from "mongoose";


mongoose.connect(process.env.DB, console.log("DB Connected"));


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
    console.log("connected", socket.id);

    socket.on('join_room', (data) => {
        socket.join(data.room)
        console.log(`User ${data.pseudoname} with id ${socket.id} joined room ${data.room}`);
    })

    socket.on('send_message', (data) => {
        socket.to(data.room).emit("recieve_message", data)
    })

    socket.on('disconnect', () => {
        console.log("disconnected");
    })
})

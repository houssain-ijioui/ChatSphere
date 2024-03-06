import express from "express";
const app = express();
import { Server } from "socket.io";


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
        socket.join(data)
        console.log(`User with id ${socket.id} joined room ${data}`);
    })

    socket.on('send_message', (data) => {
        socket.to(data.room).emit("recieve_message", data)
    })

    socket.on('disconnect', () => {
        console.log("disconnected");
    })
})

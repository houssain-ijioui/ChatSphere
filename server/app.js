import { config } from "dotenv";
config();
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send('ok')
})

const PORT = process.env.PORT
app.listen(PORT, console.log("Server Running on 3001"));
import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import cors from 'cors';
import authRouter from './routes/Auth.js'
import userRouter from "./routes/User.js"
import postRouter from "./routes/Post.js"
import commentRouter from "./routes/Comment.js"


const app = express();

app.use(express.json());
app.use(cors({origin:"http://localhost:5173"}));

app.use("/auth/api", authRouter);
app.use("/auth/user", userRouter);
app.use("/auth/post", postRouter);
app.use("/auth/comment", commentRouter);


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log("Server is running on:", {PORT});
        });
    })
    .catch((err) => {
        console.error(err);
    });

    app.listen(5000, () => {
        console.log("app is running on port 5000")
    })
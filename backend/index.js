// index.js (just defines the app, no listen)

import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import authRouter from './routes/Auth.js';
import userRouter from "./routes/User.js";
import postRouter from "./routes/Post.js";
import commentRouter from "./routes/Comment.js";
import medicineRoutes from "./routes/Verification.js";
import adminRoutes from "./routes/Admin.js";
import fileRoutes from "./routes/fileRoutes.js";
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

app.use("/auth/api", authRouter);
app.use("/auth/user", userRouter);
app.use("/auth/post", postRouter);
app.use("/auth/comment", commentRouter);
app.use("/auth/api/post", medicineRoutes);
app.use("/auth/api", adminRoutes);
app.use("/api/files", fileRoutes);

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

export default app;

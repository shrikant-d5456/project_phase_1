import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import cors from 'cors';
import authRouter from './routes/Auth.js'
import userRouter from "./routes/User.js"
import postRouter from "./routes/Post.js"
import commentRouter from "./routes/Comment.js"
import medicineRoutes from "./routes/Verification.js";
import adminRoutes from "./routes/Admin.js";
// import uploadRouter from "./routes/Upload.js"; 

import fileRoutes from "./routes/fileRoutes.js"

const app = express();

app.use(express.json());


app.use(cors({
    origin: "https://project-phase-1-psi.vercel.app", // Allow your frontend origin
    methods: ["POST", "GET", "DELETE", "PUT", "OPTIONS"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Headers allowed
    credentials: true // Allow cookies or authorization headers
}));

// Handle preflight (OPTIONS) requests
app.options('*', cors());
// Example route
app.get('/', (req, res) => {
    res.send('CORS-enabled server is running!');
});

app.use("/auth/api", authRouter);
app.use("/auth/user", userRouter)
;
app.use("/auth/post", postRouter);

app.use("/auth/comment", commentRouter);

app.use("/auth/api/post", medicineRoutes);
app.use("/auth/api", adminRoutes);

app.use("/api/files", fileRoutes);



mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`Server is running on: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

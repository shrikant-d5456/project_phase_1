// routes/userRoutes.js
import express from 'express';
import {LikedBlog} from "../controller/LikedBlog.js";

const router = express.Router();

router.post('/:id', LikedBlog);

export default router;
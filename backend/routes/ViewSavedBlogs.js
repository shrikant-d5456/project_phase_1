//View saved Blogs
import express from 'express';
import {SavedBlogs} from "../controller/SavedBlogs";

const router = express.Router();

router.post('/:id/saved-blogs', SavedBlogs);

export default router;
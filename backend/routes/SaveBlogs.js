//actual save function
import express from 'express';
import {SaveABlog} from "../controller/SaveABlog.js";

const router = express.Router();

router.post('/:id', SaveABlog);

export default router;
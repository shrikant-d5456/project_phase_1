// routes/blogRoutes.js
import express from 'express';
import {Like} from "../controller/ActualLike";

const router = express.Router();

router.post('/:id', Like);

export default router;
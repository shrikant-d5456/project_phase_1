import express from 'express'; 
import { createPost,deletePost,getAllPosts,getPost,getSearchPost,getUserPost,updatePost} from '../controller/Post.js';

const router = express.Router();

// Create post
router.post('/:id', createPost);

// Update post
router.put('/:id', updatePost);

// Delete post
router.delete('/:id', deletePost);

// Get a single post
router.get('/:id', getPost);

// Get all posts of a user
router.get('/user/:userId', getUserPost);

// Get all posts
router.get('/', getAllPosts);

// Search posts
// router.get('/', getSearchPost);

export default router;

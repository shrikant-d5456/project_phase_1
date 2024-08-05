import { Posts } from '../models/Post.js';

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { title, desc, img, username,userId,categories  } = req.body;

        if (!title || !desc || !img || !username || !userId || !categories ) {
            return res.status(401).send({ msg: "All fields are required" });
        }

        const newPost = await Posts.create({ title, desc, img, username,userId,categories  });
        return res.status(201).send({
            msg: "Stored Post successfully",
            data: newPost,
        });
       
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
};

// Update a post
export const updatePost = async (req, res) => {
    try {
        const updatePost = await Posts.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).send({ msg: "Post updated", data: updatePost });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete a post
export const deletePost = async (req, res) => {
    try {
        await Posts.findByIdAndDelete(req.params.id);
        res.status(200).send({ msg: "Post deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a single post
export const getPost = async (req, res) => {
    try {
        const getPosts = await Posts.findById(req.params.id);
        res.status(200).json({ data: getPosts });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Search posts by title
export const getSearchPost = async (req, res) => {
    const { search } = req.query;

    if (!search) {
        return res.status(400).json({ message: "Search query is required" });
    }

    try {
        const searchFilter = {
            title: { $regex: search, $options: "i" } 
        };

        const getPosts = await Posts.find(searchFilter);
        res.status(200).json({ count: getPosts.length, data: getPosts });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: "An error occurred while searching posts" });
    }
};

// Get all posts of a user
export const getUserPost = async (req, res) => {
    try {
        const getPosts = await Posts.find({ userId: req.params.userId });
        res.status(200).json({ count: getPosts.length, data: getPosts });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const getPosts = await Posts.find();
        res.status(200).json({ count: getPosts.length, data: getPosts });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
};

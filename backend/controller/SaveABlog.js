// Like a Blog Post
import { User } from '../models/User.js';

export const SaveABlog = async (req, res) => {
    const userId = req.user.id;

    try {
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Find the user and check if the blog is already saved
        const user = await User.findById(userId);
        if (user.savedBlogs.includes(blogId)) {
            return res.status(400).json({ message: 'This blog is already saved' });
        }

        // Add the blog ID to the user's savedBlogs and save the user
        user.savedBlogs.push(blogId);
        await user.save();

        res.status(200).json({ message: 'Blog saved successfully', savedBlogs: user.savedBlogs });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
};
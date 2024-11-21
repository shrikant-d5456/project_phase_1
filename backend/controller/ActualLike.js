// Like a Blog Post
import { User } from '../models/User.js';

export const Like = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId).populate('like');
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }

        if (blog.likedBy.includes(userId)) {
            return res.status(400).json({ message: 'You have already liked this blog' });
        }

        blog.likedBy.push(userId);
        blog.likes += 1;
        await blog.save();

        res.status(200).json({ message: 'Blog liked successfully', blog });

        res.status(200).json(user.like);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
};
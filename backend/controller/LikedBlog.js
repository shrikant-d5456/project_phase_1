//actual liked blogs
import { User } from '../models/User.js';

export const LikedBlog = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId).populate('likedBlogs');
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }

        res.status(200).json(user.likedBlogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
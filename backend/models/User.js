import mongoose from 'mongoose';  

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        savedPosts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post', // Reference to the Post model
            },
        ],
    },
    { timestamps: true }
);

export const User = mongoose.model('User', UserSchema);

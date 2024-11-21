import mongoose from "mongoose";
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User ' 
    },
    likes: { 
        type: Number, 
        default: 0 
    },
    comments: [
        { 
            userId: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'User ' 
            }, comment: String 
        }],
    ratings: [{ 
        userId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User ' 
                }, 
            rating: 
            { 
                type: Number, 
                min: 1, 
                max: 5 
            } 
            }],
    verified: { 
        type: Boolean, 
        default: false 
    },  // For blog verification status
});

module.exports = mongoose.model('Blog', BlogSchema);
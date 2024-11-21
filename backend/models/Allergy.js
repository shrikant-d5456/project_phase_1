import mongoose from "mongoose";
const mongoose = require('mongoose');

const AllergySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: 
    {   type: String, 
        required: true 
    },
    symptoms: [
        { 
            type: String 
        }],
    remedies: [
        { 
            type: String 
        }],
});

module.exports = mongoose.model('Allergy', AllergySchema);
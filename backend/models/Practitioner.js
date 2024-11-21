// models/Practitioner.js
const mongoose = require('mongoose');

const PractitionerSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    textbooks: [{
        title: { 
            type: String, 
            required: true 
        },
        fileUrl: { 
            type: String, 
            required: true 
        }, // URL to the PDF file
        description: { 
            type: String 
        }
    }],
    quizzes: [{
        question: { 
            type: String, 
            required: true 
        },
        options: [{ 
            type: String, 
            required: true 
        }],
        answer: { 
            type: String, 
            required: true 
        } // Correct answer
    }]
});

module.exports = mongoose.model('Practitioner', PractitionerSchema);
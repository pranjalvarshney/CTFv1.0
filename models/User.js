const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User',UserSchema);
module.exports = User;
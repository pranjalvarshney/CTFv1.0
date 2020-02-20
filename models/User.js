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
    level0:
    {
        type: Boolean,
        default:false
    },
     level1:
    {
        type: Boolean,
        default:false
    },
     level2:
    {
        type: Boolean,
        default:false
    },
     level3:
    {
        type: Boolean,
        default:false
    },
     level4:
    {
        type: Boolean,
        default:false
    },
     level5:
    {
        type: Boolean,
        default:false
    },
    points: {
        type: Number,
        default: 0
    },
    time:{
        type:Number,
        default:9000000
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User',UserSchema);
module.exports = User;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6
    },
    currency: {
        type: String,
        default: 'EGP'
    },
    timezone: {
        type: String,
        default: 'UTC'
    },
    age: {
        type: Number,
        default: null
    },
    occupation: {
        type: String,
        default: null,
        trim: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;

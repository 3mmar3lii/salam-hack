const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['checking', 'savings', 'credit', 'cash'],
        default: 'cash'
    },
    balance: {
        type: Number,
        default: 0
    },
    currency: {
        type: String,
        default: 'EGP'
    }
}, {
    timestamps: true
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;

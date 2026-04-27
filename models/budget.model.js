const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    period: {
        type: String,
        enum: ['monthly', 'weekly'],
        default: 'monthly'
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    spent: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Budget = mongoose.model('Budget', budgetSchema);
module.exports = Budget;

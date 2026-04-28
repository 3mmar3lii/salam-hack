const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    loanType: {
        type: String,
        enum: ['borrow', 'lend'], // borrow = user owes money, lend = user is owed money
        required: true
    },
    counterparty: {
        type: String, // The person or institution
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true
    },
    remainingAmount: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['active', 'paid'],
        default: 'active'
    },
    note: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;

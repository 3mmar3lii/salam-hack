const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatSession',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // The natural language response shown to the user
    response: {
        type: String,
        required: true
    },
    // What the AI detected (e.g. add_expense, get_balance)
    intent: {
        type: String,
        default: null
    },
    // Full raw JSON returned by OpenAI
    rawAIOutput: {
        type: mongoose.Schema.Types.Mixed,
        default: null
    }
}, {
    timestamps: true
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);
module.exports = ChatMessage;

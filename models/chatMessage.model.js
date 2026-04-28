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
    // The original text sent by the user
    userMessage: {
        type: String,
        required: true
    },
    // The natural language response shown to the user
    response: {
        type: String,
        required: true
    },
    // What the AI detected
    intent: {
        type: String,
        enum: ['CHITCHAT', 'ADD', 'UPDATE', 'DELETE', 'INQUIRE', null],
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

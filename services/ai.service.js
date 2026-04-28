const axios = require('axios');

// This is the URL of your Python FastAPI bridge
const HACKSTORM_AI_URL = 'http://localhost:8000/chat';


const callHackstormAI = async (userId, message) => {
    try {
        const response = await axios.post(HACKSTORM_AI_URL, {
            user_id: userId,
            message: message
        }, {
            timeout: 60000 // 60 seconds (AI can be slow)
        });

        return {
            response: response.data.response,
            intent: response.data.intent,
            sql_query: response.data.sql_query,
            error: response.data.error
        };

    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            throw new Error('Could not connect to Hackstorm AI server. Make sure it is running on port 8000.');
        }
        
        if (error.response) {
            throw new Error(`AI Bridge Error [${error.response.status}]: ${error.response.data.detail || error.message}`);
        }

        throw new Error(`Failed to contact AI Bridge: ${error.message}`);
    }
};

module.exports = { callHackstormAI };

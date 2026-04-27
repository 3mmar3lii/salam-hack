const axios = require('axios');

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const callOpenAI = async (userMessage) => {
    try {
        const res = await axios.post(
            OPENAI_API_URL,
            {
                model: OPENAI_MODEL,
                messages: [
                    { role: 'user', content: userMessage }
                ],
                temperature: 0.3,         // Low = more predictable / structured output
                response_format: { type: 'json_object' } // Force JSON output
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                },
                timeout: 30000 // 30 seconds
            }
        );

        const raw = res.data.choices[0].message.content;

        // Parse the JSON string returned by OpenAI
        const parsed = JSON.parse(raw);

        return parsed;

    } catch (error) {
        // Axios error (network, timeout, OpenAI API error)
        if (error.response) {
            const status = error.response.status;
            const msg    = error.response.data?.error?.message || 'OpenAI API error';
            throw new Error(`OpenAI [${status}]: ${msg}`);
        }

        // JSON parse error (OpenAI returned non-JSON)
        if (error instanceof SyntaxError) {
            throw new Error('OpenAI returned invalid JSON');
        }

        throw new Error(`OpenAI request failed: ${error.message}`);
    }
};

module.exports = { callOpenAI };

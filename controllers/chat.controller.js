const { callOpenAI } = require('../services/openai.service');

const sendMessage = async (req, res, next) => {
    try {
        const { message } = req.body;

        if (!message || message.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Message is required'
            });
        }

        const aiResponse = await callOpenAI(message);

        return res.status(200).json({
            success: true,
            data: aiResponse
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { sendMessage };

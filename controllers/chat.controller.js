const { callHackstormAI } = require('../services/ai.service');

const sendMessage = async (req, res, next) => {
    try {
        const { message } = req.body;
        // In a real app, this would be req.user.id
        const userId = req.user?.id || 'default_user';

        if (!message || message.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Message is required'
            });
        }

        const aiResult = await callHackstormAI(userId, message);

        return res.status(200).json({
            success: true,
            data: aiResult
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { sendMessage };

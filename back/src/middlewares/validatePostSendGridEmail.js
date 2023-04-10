const validatePostSendGridEmail = (req, res, next) => {
    const { to } = req.body;

    if(!to) return res.status(400).json({ error: 'Missing to' });

    next();
};

module.exports = validatePostSendGridEmail;
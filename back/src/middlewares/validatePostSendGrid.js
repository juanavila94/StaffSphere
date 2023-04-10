const validatePostSendGrid = async(req, res, next) => {
    const { to, subject, text } = req.body;

    if(!to) return res.status(400).json({ error: 'Missing to' });
    if(!subject) return res.status(400).json({ error: 'Missing subject' });
    if(!text) return res.status(400).json({ error: 'Missing text' });

    next();
};

module.exports = validatePostSendGrid;
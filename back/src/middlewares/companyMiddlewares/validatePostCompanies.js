const validatePostCompanies = (req, res, next) => {
    const {  name, cuit, industry, location, numberEmployees, tel, email } = req.body;
    if (!name) return res.status(400).json({error: 'Missing name'});
    if (!cuit) return res.status(400).json({error: 'Missing cuit'});
    if (!industry) return res.status(400).json({error: 'Missing industry'});
    if (!location) return res.status(400).json({error: 'Missing location'});
    if (!numberEmployees) return res.status(400).json({error: 'Missing numberEmployees'});
    if (!tel) return res.status(400).json({error: 'Missing tel'});
    if (!email) return res.status(400).json({error: 'Missing email'});
    

    next();
}

module.exports = validatePostCompanies;
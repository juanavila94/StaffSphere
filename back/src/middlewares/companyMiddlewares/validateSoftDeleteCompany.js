const softDeleteCompany = (req, res, next) => {
     const { id } = req.params;
     if(!id) return res.status(404).json({error: 'missing id'});
     next();
};

module.exports = softDeleteCompany;
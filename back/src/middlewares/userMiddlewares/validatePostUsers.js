const validatePostUsers = (req, res, next) => {
    const {  name, lastName, email, birthDate, address, image, dni, tel, role, dateOfAdmission, cuil, cbu,AreaId, PositionId,CompanyId
    } = req.body;
    if (!name) return res.status(400).json({error: 'Missing name'});
    if (!lastName) return res.status(400).json({error: 'Missing lastname'});
    if (!email) return res.status(400).json({error: 'Missing email'});
    if (!birthDate) return res.status(400).json({error: 'Missing birthDate'});
    if (!address) return res.status(400).json({error: 'Missing address'});
    if (!image) return res.status(400).json({error: 'Missing image'});
    if (!AreaId) return res.status(400).json({error: 'Missing Area'});
    if (!PositionId) return res.status(400).json({error: 'Missing Position'});
    if (!CompanyId) return res.status(400).json({error: 'Missing Company'}); 
    if (!dni) return res.status(400).json({error: 'Missing dni'});
    if (!tel) return res.status(400).json({error: 'Missing tel'});
    if (!role) return res.status(400).json({error: 'Missing role'});
    if (!dateOfAdmission) return res.status(400).json({error: 'Missing dateOfAdmission'});
    if (!cuil) return res.status(400).json({error: 'Missing cuil'});
    if (!cbu) return res.status(400).json({error: 'Missing cbu'});



    next();
}

module.exports = validatePostUsers;
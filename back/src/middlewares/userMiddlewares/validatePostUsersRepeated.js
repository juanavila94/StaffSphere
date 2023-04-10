const Users = require('../../models').Users;

const validatePostUsersRepeated = async (req, res, next) => {
    const { email, dni, tel, CompanyId } = req.body

    const findByEmail = await Users.findOne({
        where: { 
            email: email,
            CompanyId: CompanyId
        }
    });

    const findByDni = await Users.findOne({
        where: { 
            dni: dni, 
            CompanyId: CompanyId
        }
    });

    const findByTel = await Users.findOne({
        where: { 
            tel: tel,
            CompanyId: CompanyId
        }
    });

    if(findByEmail) return res.status(404).json({ error: `The email: ${email} already exists in system. Please try another one.` });
    if(findByDni) return res.status(404).json({ error: `The dni: ${dni} already exists in system. Please try another one.` });
    if(findByTel) return res.status(404).json({ error: `The phone: ${tel} already exists in system. Please try another one.` });

    next();
};

module.exports = validatePostUsersRepeated;
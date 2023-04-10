const axios = require('axios');
const Users = require('../../models').Users;
const jwt = require('jsonwebtoken');


const checkAuthorization = async (req, res) => {

    const response = await axios('https://dev-a5lp6h1utxb70h27.us.auth0.com/userinfo', {
        headers: {
            authorization: `Bearer ${req.auth.token}`
            }
        })

    let email = response.data.email;
    const check = await Users.findOne({
        where: {
            email: email
        }
    })
        
   
    if (check===null) {
        res.status(403).send('Not authorized')
    } else {
        
        let id = check.dataValues.id;
        let name = check.dataValues.name;
        let lastName = check.dataValues.lastName
        let CompanyId = check.dataValues.CompanyId;
        let role = check.dataValues.role;
    
        const payload = {
            id: id,
            name: name,
            lastName: lastName,
            CompanyId: CompanyId,
            role: role
        }
    
        const newToken = jwt.sign(payload, '123456')
    
    
        res.status(200).json({token : newToken})
    }




        

}

module.exports = checkAuthorization

const axios = require('axios');

const authenticationToken = async (req, res, next) => {

    try {
        
        const response = await axios('https://dev-a5lp6h1utxb70h27.us.auth0.com/userinfo', {
            headers: {
                authorization: `Bearer ${req.auth.token}`
            }
        })
       
        console.log(response.data)
        if(response.data.email_verified) next()
      
        
    } catch (error) {
        console.log({error : error.message})
       
    }
}

module.exports = authenticationToken;
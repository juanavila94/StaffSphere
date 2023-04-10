const { auth } = require('express-oauth2-jwt-bearer');


const verifyJWT = auth({
    audience: 'staffsphere identifier',
    issuerBaseURL: 'https://dev-a5lp6h1utxb70h27.us.auth0.com',
    tokenSigningAlg: 'RS256'
  });

  module.exports = verifyJWT;
const jsonwebtoken = require("jsonwebtoken");
const {secret} = require('../../config/config')

const generateJWTToken = (user)=>jsonwebtoken.sign(user,secret,{expiresIn:'1hr'});

function verifyToken(token){
    //verify token. Return user or null if expired
    const verified = jsonwebtoken.verify(token,secret,(err,decoded)=>{

        if(err){
            return null;
        }

        return decoded;
    });

    return verified;
}

module.exports = {generateJWTToken,verifyToken}
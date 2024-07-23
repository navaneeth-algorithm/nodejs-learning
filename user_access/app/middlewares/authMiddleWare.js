const { verifyToken } = require("../models/jwtTokenModel");


const userAuthMiddleWare = (req,res,next)=>{

    //token for authorised user
    const token = req.headers['authorization'];
    
    //If no token present , then not authorised
    if(!token){
        return res.status(403).send({success:false,msg:'Forbidden!! You Cannot Come Here'});
    }

    //Verify token
    const decoded = verifyToken(token);
    
    //If decoded returns null, then user token is not valid
    //Either expired or not correct. Regenerate using login
    if(!decoded){
        return res.status(403).send({success:false,msg:'You!! Insolent Fool. You cannot break second WALL!!'});
    }

    req.decoded = decoded;

   next();
}

module.exports = {userAuthMiddleWare}
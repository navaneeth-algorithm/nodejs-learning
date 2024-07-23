const { generateJWTToken } = require("../models/jwtTokenModel");
const { validateUser } = require("../models/userModel");


const userLogin = (req,res)=>{

    const {email,password} = req.body;

    // Validate the user using email and password
    const user = validateUser(email,password);

    // return if not validated
    if(!user){
        return res.status(400).send({success:false,msg:'HA HA :) You are not validated'});
    }

    //generate JWT Token for the user to login and keep access for one hour
    const token = generateJWTToken({id:user.id,email:user.email,name:user.name});

    return res.status(200).send({success:true,msg:'Here this is a token valid for 1 hour!!. ',token})
}

const userRegister = (req,res)=>{
    const {username,email,password} = req.body;

    //validate for any empty fields.
    if(!email || !username|| !password){
        return res.status(400).send({success:false,msg:'username | email | password is required'});
    }

    //register user here
    return res.status(200).send({success:true,msg:`${username.toUpperCase()} we are obliged to recieved your request. But we are yet to open for all the people`,data:req.body})
}


module.exports = {userLogin,userRegister}
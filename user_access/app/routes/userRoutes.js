const { Router } = require("express");
const { userLogin, userRegister } = require("../controllers/userController");
const { userAuthMiddleWare } = require("../middlewares/authMiddleWare");

const router = Router();

//User routes
router.post('/login',userLogin);
router.post('/dashboard',userAuthMiddleWare,(req,res)=>res.status(200).send({success:true,msg:'Welcome!!',data:req.decoded}))
router.post('/register',userRegister);

module.exports = router;
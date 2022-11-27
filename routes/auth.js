const express =require("express");
const router = express.Router();

// controllers
const {greetings,overview}=require("../controllers/auth")



// Routes

router.get("/",isAuth,isAdmin,greetings);
router.get("/overview",overview)




module.exports= router;

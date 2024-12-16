const express=require('express');
const {AdminSignup,AdminLogin}=require('../Controllers/AdminController');

const router=express.Router();

//signup admin

router.post('/admin_signup',AdminSignup);
router.post('/admin_Login',AdminLogin);

module.exports=router;

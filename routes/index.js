const express=require('express');
const homeController=require('../controllers/home_controller');



const router=express.Router();

router.get('/home',homeController.home);

router.use('/user',require('./user'));


module.exports =router;




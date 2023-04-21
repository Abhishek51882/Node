const express=require('express');

const router=express.Router();
router.get('/', function(req, res){
    res.render('user');

});
router.get('/login',(req, res) => {
    res.send("<h1>Login</h1>");
});

router.get('/logout',(req, res) => {
    res.send("<h1>logout</h1>");
});

module.exports =router;
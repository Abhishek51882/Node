const express=require('express');
const User=require('../models/user');

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

router.get('/signup',(req, res) => {
    res.render('signUp');

});
router.get('/signin',(req, res) => {
    res.render('signIn');
});


router.post('/create-user',(req, res) => {
    console.log(req.body);

    async function fun(){
            return await User.findOne({email: req.body.email});
   
}

fun().then((u)=>{
    if(!u){
        User.create(req.body);
        return res.redirect('/user/signin');
    }else{
        return res.redirect('back');
    }
    
    
})
    

})

router.post('/create-session',(req, res)=>{
    async function fun(){
        return await User.findOne({email: req.body.email});

}
fun().then((u)=>{
    console.log(u);
    if(!u){
        return res.redirect('back');
    }else{
        if(req.body.password!=u.password){
            return res.redirect('back');
        }else{
             res.cookie('userId',u._id);
            return res.render('home');
        }
    }
})

})



module.exports =router;
const express = require('express');
const port=8001;
const expressLayouts=require('express-ejs-layouts');


const app=express();
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`listening on port ${port}`);
    }
})

app.use('/',require('./routes/index'))





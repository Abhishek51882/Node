const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/user1');



const user=new mongoose.Schema({
    name:{
        type: 'string',
        required: true,

    },
    email:{
        type: 'string',
        required: true,
        unique: true,

    },
    password:{
        type: 'string',
        required: true,
    }
})
const User = mongoose.model('user', user);

module.exports = User;
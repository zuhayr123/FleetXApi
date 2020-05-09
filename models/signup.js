const mongoose = require('mongoose');

const SignupSchema = mongoose.Schema({
    signup_id : {
        type : String,
        required : true
    },
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    contact_1 : {
        type : String,
        required : true
    },
    contact_2 : {
        type : String,
        required : false
    },
    address_1 : {
        type : String,
        required : false
    },
    address_2 : {
        type : String,
        required : false
    },
    address_3 : {
        type : String,
        required : false
    },
    cust_type : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    timestamp : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

const Signup = module.exports = mongoose.model('Signup', SignupSchema);
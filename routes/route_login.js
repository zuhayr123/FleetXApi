const express = require('express');
const extend = require('extend');
const router = express.Router();

const Signup = require('../models/signup');

router.get('/', (req,  res , next) =>{
    var phone_number_in_param = req.param('contact_1');
    var password_in_param = req.param('password');
    console.log(phone_number_in_param);
    console.log(password_in_param);
    Signup.findOne({contact_1: phone_number_in_param, password: password_in_param},function(err, users){
        if(users == "" || users == null){
            //res.status(403).json({msg: 'Check your ID and Password',users, status : 'loginFailure'});
            Signup.findOne({contact_1: phone_number_in_param}, function(err1, users1){
                if(users1 == "" || users1 == null){
                    res.status(403).json({msg: 'Phone Number is not registered',users, status : 'loginFailure'});
                }
                else{
                    res.status(403).json({msg: 'Incorrect Password',users, status : 'loginFailure'});
                }
            })
        }
        else{
            res.json({msg: 'Successfully logged in',users, status : 'success'});
        }
    })
});

// getting signups
router.get('/all', (req, res, next)=>{
    Signup.find((err, signups)=>{
        res.json(signups);
    })
});


module.exports = router;
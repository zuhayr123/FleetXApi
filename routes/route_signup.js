const express = require('express');
const extend = require('extend');
const router = express.Router();

const Signup = require('../models/signup');

// getting signups
router.get('/', (req, res, next)=>{
    Signup.find((err, signups)=>{
        res.json(signups);
    })
});

//adding signups
router.post('/',(req, res, next)=>{
    let newSignup = new Signup(req.body);
    newSignup.save((err, signup)=>{
        if(err){
            //console.log(err);
            res.json("Error occured in saving : " + err);
        }
        else{
            res.json(signup);
        }
    })
})

//deleting signups
router.delete('/',(req, res, next)=>{
    var _id = req.param("id");
    //console.log(_id);
    Signup.remove({_id : _id}, (err, result)=>{
        if(err){
            res.json("Error : " + err);
        }
        else{
            res.json("Succesfully deleted");
        }
    } );
})

//Fetch all entries by regex 
router.get('/getall', (req, res, next)=>{
    var name = req.body.name;
    Signup.find({
        first_name : {$regex: "^" + name, $options:"i"}
    }, (err, signups) =>{
        if(err){
            res.json("Error")
        }
        else{
            res.json(signups);
        }
    })

})




module.exports = router;
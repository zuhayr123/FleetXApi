const express = require('express');
const extend = require('extend');
const router = express.Router();

const Owner = require('../models/owner');

// getting owners
router.get('/', (req, res, next)=>{
    Owner.find((err, owners)=>{
        res.json(owners);
    })
});

//adding owners
router.post('/',(req, res, next)=>{
    let newOwner = new Owner(req.body);
    newOwner.save((err, owner)=>{
        if(err){
            //console.log(err);
            res.json("Error occured in saving : " + err);
        }
        else{
            res.json(owner);
        }
    })
})

//deleting owners
router.delete('/',(req, res, next)=>{
    var _id = req.param("id");
    //console.log(_id);
    Owner.remove({_id : _id}, (err, result)=>{
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
    Owner.find({
        first_name : {$regex: "^" + name, $options:"i"}
    }, (err, owners) =>{
        if(err){
            res.json("Error")
        }
        else{
            res.json(owners);
        }
    })

})


module.exports = router;
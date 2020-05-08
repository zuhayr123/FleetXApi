const express = require('express');
const extend = require('extend');
const router = express.Router();

const Driver = require('../models/driver');

// getting drivers
router.get('/', (req, res, next)=>{
    Driver.find((err, drivers)=>{
        res.json(drivers);
    })
});

//adding drivers
router.post('/',(req, res, next)=>{
    let newDriver = new Driver(req.body);
    newDriver.save((err, driver)=>{
        if(err){
            console.log(err);
            res.json("Error occured in saving : " + err);
        }
        else{
            res.json(driver);
        }
    })
})

//deleting drivers
router.delete('/',(req, res, next)=>{
    var _id = req.param("id");
    console.log(_id);
    Driver.remove({_id : _id}, (err, result)=>{
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
    Driver.find({
        first_name : {$regex: "^" + name, $options:"i"}
    }, (err, drivers) =>{
        if(err){
            res.json("Error")
        }
        else{
            res.json(drivers);
        }
    })

})


module.exports = router;
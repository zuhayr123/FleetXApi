const express = require('express');
const extend = require('extend');
const router = express.Router();

const Truck = require('../models/truck');

// getting trucks
router.get('/', (req, res, next)=>{
    Truck.find((err, trucks)=>{
        res.json(trucks);
    })
});

//adding trucks
router.post('/',(req, res, next)=>{
    let newTruck = new Truck(req.body);
    newTruck.save((err, truck)=>{
        if(err){
            //console.log(err);
            res.json("Error occured in saving : " + err);
        }
        else{
            res.json(truck);
        }
    })
})

//deleting trucks
router.delete('/',(req, res, next)=>{
    var _id = req.param("id");
    //console.log(_id);
    Truck.remove({_id : _id}, (err, result)=>{
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
    Truck.find({
        first_name : {$regex: "^" + name, $options:"i"}
    }, (err, trucks) =>{
        if(err){
            res.json("Error")
        }
        else{
            res.json(trucks);
        }
    })

})


module.exports = router;
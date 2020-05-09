const express = require('express');
const extend = require('extend');
const router = express.Router();

const Trip = require('../models/trip');

// getting trips
router.get('/', (req, res, next)=>{
    Trip.find((err, trips)=>{
        res.json(trips);
    })
});

//adding trips
router.post('/',(req, res, next)=>{
    let newTrip = new Trip(req.body);
    newTrip.save((err, trip)=>{
        if(err){
            //console.log(err);
            res.json("Error occured in saving : " + err);
        }
        else{
            res.json(trip);
        }
    })
})

//deleting trips
router.delete('/',(req, res, next)=>{
    var _id = req.param("id");
    //console.log(_id);
    Trip.remove({_id : _id}, (err, result)=>{
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
    Trip.find({
        first_name : {$regex: "^" + name, $options:"i"}
    }, (err, trips) =>{
        if(err){
            res.json("Error")
        }
        else{
            res.json(trips);
        }
    })

})


module.exports = router;
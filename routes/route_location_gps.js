const express = require('express');
const extend = require('extend');
const router = express.Router();

const LocationGps = require('../models/location-gps.js');

router.get('/', (req, res, next)=>{
    LocationGps.find((err, locations)=>{
        res.json(locations);
    })
});

//adding locations
router.post('/',(req, res, next)=>{
    let newLocation = new LocationGps(req.body);
    newLocation.save((err, location)=>{
        if(err){
            //console.log(err);
            res.json("Error occured in saving : " + err);
        }
        else{
            res.json(location);
        }
    })
})

module.exports = router;

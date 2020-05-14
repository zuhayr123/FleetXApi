const mongoose = require('mongoose');

const LocationGpsSchema = mongoose.Schema({
    driver_id : {
        // foreign key from driver
        type : String,
        required : true
    },
    latitude : {
        type : String,
        required : true
    },
    longitude : {
        type : String,
        required : true
    },
    timestamp : {
        type : String,
        required : true
    }
});

const LocationGPS = module.exports = mongoose.model('LocationGps', LocationGpsSchema);
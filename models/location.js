const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    location_id : {
        type : String,
        required : true
    },
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
    },
    trip_id : {
        // foreign key from trip
        type : String,
        required : true
    },
    speed : {
        type : String,
        required : false
    }
});

const Location = module.exports = mongoose.model('Location', LocationSchema);
const mongoose = require('mongoose');

const TripSchema = mongoose.Schema({
    trip_id : {
        type : String,
        required : true
    },
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    distance : {
        type : String,
        required : false
    },
    start_time : {
        type : String,
        required : true
    },
    end_time : {
        type : String,
        required : false
    },
    driver_id : {
        // foreign key from driver
        type : String,
        required : true
    }
});

const Trip = module.exports = mongoose.model('Trip', TripSchema);
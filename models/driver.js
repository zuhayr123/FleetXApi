const mongoose = require('mongoose');

const DriverSchema = mongoose.Schema({
    driver_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    dl_number : {
        type : String,
        required : true
    },
    dl_photo : {
        type : String,
        required : true
    },
    truck_id : {
        // foreign key for truck 
        type : String,
        required : true
    }
});

const Driver = module.exports = mongoose.model('Driver', DriverSchema);
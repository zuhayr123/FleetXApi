const mongoose = require('mongoose');

const TruckSchema = mongoose.Schema({
    truck_id : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    make : {
        type : String,
        required : true
    },
    details : {
        type : String,
        required : true
    },
    tonnage : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    reg_number : {
        type : String,
        required : true
    },
    owner_id : {
        // foreign key for owner 
        type : String,
        required : true
    }
});

const Truck = module.exports = mongoose.model('Truck', TruckSchema);
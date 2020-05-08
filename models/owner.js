const mongoose = require('mongoose');

const OwnerSchema = mongoose.Schema({
    owner_id : {
        type : String,
        required : true
    },
    firt_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        required : true
    },
    contact_1 : {
        type : String,
        required : true
    },
    contact_2 : { 
        type : String,
        required : false
    },
    address_1 : {
        type : String,
        required : false
    },
    address_2 : {
        type : String,
        required : false
    },
    address_3 : {
        type : String,
        required : false
    }
});

const Owner = module.exports = mongoose.model('Owner', TruckSchema);
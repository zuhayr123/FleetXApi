const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// getting contacts
router.get('/contact', (req, res, next)=>{
    Contact.find((err, contacts)=>{
        res.json(contacts);
    })
});

//adding contacts
router.post('/contact',(req, res, next)=>{
    //console.log(req);
    let newContact = Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, contact)=>{
        if(err){
            console.log(err);
            res.json("Error occured in saving : " + err);
        }
        else{
            res.json(contact +  " data saved");
        }
    })
})

//deleting contacts
router.delete('/contact/',(req, res, next)=>{
    var _id = req.params.id;
    console.log(_id);
    Contact.remove({_id : _id}, (err, result)=>{
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
    Contact.find({
        first_name : {$regex: "^" + name, $options:"i"}
    }, (err, contacts) =>{
        if(err){
            res.json("Error")
        }
        else{
            res.json(contacts);
        }
    })

})


module.exports = router;
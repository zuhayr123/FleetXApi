const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// getting contacts
router.get('/contacts', (req, res, next)=>{
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
            res.send("Error occured in saving : " + err);
        }
        else{
            res.send(contact +  " data saved");
        }
    })
})

//deleting contacts
router.delete('/contact/:id',(req, res, next)=>{
    //logic for deleting contact
})

module.exports = router;
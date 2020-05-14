//importing modules 
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

//routing files
const route_driver = require('./routes/route_driver.js');
const route_owner = require('./routes/route_owner.js');
const route_trip = require('./routes/route_trip.js');
const route_location = require('./routes/route_location.js');
const route_truck = require('./routes/route_truck.js');
const route_signup = require('./routes/route_signup.js');
const route_login = require('./routes/route_login.js');
const route_location_gps = require('./routes/route_location_gps.js');

//test for trial

var app = express();
//port no
const port = 3000;

//adding middleware cors and bodyparser
app.use(cors());
app.use(bodyparser.json()); 
app.use(express.urlencoded());

//routes
app.use('/api/driver', route_driver);
app.use('/api/owner', route_owner);
app.use('/api/trip', route_trip);
app.use('/api/location', route_location);
app.use('/api/truck', route_truck);
app.use('/api/signup', route_signup);
app.use('/api/login', route_login);
app.use('/api/location_gps', route_location_gps);


const uri = "mongodb+srv://abou_987:mypassword@123@cluster0-5j8e4.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });

//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb');
});

//on error 
mongoose.connection.on('error', (err) => {
    if(err){
        console.log('Error occured while connecting to mongodb' + err);
    }
});

//testing server 
app.get('/', (req, res) => {
    res.send('foobar');
})



//static files
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
    res.send("Server up and running"); 
})
.listen(process.env.PORT || 3000)
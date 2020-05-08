//importing modules 
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

//routing file
const route = require('./routes/route.js');

//test for trial

var app = express();
//port no
const port = 3000;

//adding middleware cors and bodyparser
app.use(cors());
app.use(bodyparser.json()); 
app.use(express.urlencoded());

//routes
app.use('/api', route);



const uri = "mongodb+srv://abou_987:mypassword@123@cluster0-5j8e4.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });

//mongodb for internet usage

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

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
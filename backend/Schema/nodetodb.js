var express = require("express")
var bodyParser = require("body-parser")
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/mydb';
const client = new MongoClient(url);
var mongoose = require("mongoose")

const app = express()

//app.use(bodyParser.json())
//app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

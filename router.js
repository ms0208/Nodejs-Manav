var express = require('express');
var app =  express();

app.get('/', (req,resp)=>{
    console.log("Welcome to home");
    resp.send("Hi I am Home");

}).listen(4000);

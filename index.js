//var http = require('http');
var express = require('express');
var app = express();
var EventEmitter = require('events');
var port = process.env.PORT || 3000;
var func = require('./fansFile');

app.get('/', function(req,res){
    res.send(func.getAllFans());
});

app.get('/VIP/:value', function(req,res){
    var value = req.params.value;
    res.send(func.VIPfans(value));
});

app.get('/fanInfo/:value', function(req,res){
    var value = req.params.value;
    res.send(func.getFanInfo(value));
});


app.listen(port);
console.log("listening on port");
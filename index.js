//var http = require('http');
var express = require('express');
var app = express();
var EventEmitter = require('events');
var port = process.env.PORT || 3000;
var func = require('./studentsFile');

app.get('/', function(req,res){
    res.send(func.getAllStudents());
});

app.get('/excellenceStudents/:value', function(req,res){
    var value = req.params.value;
    res.send(func.excellenceStudents(value));
});

app.get('/getStudInfo/:value', function(req,res){
    var value = req.params.value;
    res.send(func.getStudInfo(value));
});
app.get('/studsGrades', function(req,res){
    res.send(func.getAllStudents());
});

app.listen(port);
console.log("listening on port");
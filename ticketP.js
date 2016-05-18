var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchemaT = new schema({
    name: {type:String, index:1, requier:true, unique:true},
    price: Number,
}, {collection: 'ticketPrice'});

var tickets = mongoose.model('tickets', userSchemaT); //connect schema
module.exports = tickets;

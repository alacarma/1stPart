var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
	name: {type:String, index:1, requier:true, unique:true},
	age: Number,
}, {collection: 'studInfo'});

var User = mongoose.model('User', userSchema); //connect schema
module.exports = User;
//module.exports = userSchema;

//console.log("required paths: " + userSchema.requiresPaths());
//console.log("indexes: " + JSON.stringify(usersSchema.indexes()));

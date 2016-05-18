var mongoose = require('mongoose');
mongoose.connect('mongodb://alacarma:312370216@ds025772.mlab.com:25772/studentsinfo');
var User = require('./user');
var tickets = require('./ticketP');
var result;
var result2;
var conn = mongoose.connection;

conn.on('error',function(err){
    console.log('connection error' + err);

});

conn.once('open', function(){
    User.find({}, function(err,user){
        if(err) throw err;
        result = user;
    });
   tickets.find({}, function(err,user2){
        if(err) throw err;
        result2 = user2;
    }); 
});

exports.getAllFans = function(){
    return result;
}


 exports.getFanInfo = function(value){
    for(var i in result){
            if(result[i].name==value){
                return(result[i]);
            }
        }  
}

exports.VIPfans = function(value){
    var VIParr=[];
        for(var exc in result2){
            if(result2[exc].price >= value){
                for(var i in result){
                    if(result[i].name==result2[exc].name){
                            VIParr.push(result[i]);
                    }
                }
            }
        }
    return VIParr;
}
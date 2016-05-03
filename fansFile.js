var fans = require("./data/fans.json");
var ticketPr = require("./data/prices.json");

exports.getAllFans = function(){
    return(fans);
}


exports.getFanInfo = function(value){
    for(var i in fans){
            if(fans[i].name==value){
                return(fans[i]);
            }
        }  
}

exports.VIPfans = function(value){
    var result=[];
        for(var exc in ticketPr){
            if(ticketPr[exc].price >=value){
                for(var i in fans){
                    if(fans[i].name==ticketPr[exc].name){
                            result.push(fans[i]);
                    }
                }
            }
        }
    return result;
}



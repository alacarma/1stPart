var students = require("./data/students.json");
var grades = require("./data/grades.json");

exports.getAllStudents = function(){
    return(students);
}

exports.getAllGrades = function(){
    return(grades);
}

exports.getStudInfo = function(value){
    for(var i in students){
            if(students[i].name==value){
                return(students[i]);
            }
        }  
}

exports.excellenceStudents = function(value){
    var result=[];
    if(value>=0 && value<=100){
        for(var exc in grades){
            if(grades[exc].grade >=value){
                for(var i in students){
                    if(students[i].name==grades[exc].name){
                            result.push(students[i]);
                    }
                }
            }
        }
    }
    return result;
}



var fs=require('fs');//import statement
//we didnot import event.(inbuild)  
//fs: file st is an inbuild module
//string is collection of file
var rs=fs.createReadStream('./demofile.txt');//./ means path
//var is shortform for variable used to store loacal values/temporary values
//reading the outside placed demotext file
//event : action performed on object
//event is buildin module
//events work with event handler
rs.on('open',function(){
    console.log('This file is open');
}); 
var buffer1=Buffer.alloc(100);//allocated space of 100 units
//we can store the data inside space
//var buffer2=new Buffer('FYND');
//var biffer3= Buffer.from(1,2,3,4);

//utilisinf buffer space
//the write function will have runtime data: username,password
buffer1.write("i am here");
//transforming the buffer content to string
var a=buffer1.toString('utf-8');
//printing the value
console.log(a);
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);//can be used for validation purpose of the objects

var bufferSource=new Buffer('ABC');//deprecated
var bufferDestination=Buffer.alloc(3);
bufferSrc.copy(bufferDest);
var Data=bufferDest.toString('utf-8');
console.log(Data);

//slice or filter the data
var bufferOld=new Buffer('INDIA IS GREAT');
var bufferNew= bufferOld.slice(0,4);
console.log(bufferNew.toString());

//concat 2 buffer
var bufferOne=new Buffer('INDIA');
var bufferTwo=new Buffer('IS GREAT');
var bufferFour=new Buffer('JAI HIND');
var bufferThree=Buffer.concat([bufferOne,bufferTwo,bufferFour]);
console.log(bufferThree.toString());



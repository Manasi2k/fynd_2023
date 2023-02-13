const http=require('http');
var ts=require("./server3");
http.createServer(function (req,res){
    
        res.writeHead(200,{'Content-Type':'text/html'});
      
        res.write('server 2');
        res.end(); 
    }).listen(8080); 
     
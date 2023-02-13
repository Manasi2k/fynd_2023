const http=require('http');
var ts=require("./server1");
http.createServer(function (req,res){
    
        res.writeHead(200,{'Content-Type':'text/html'});
      
        res.write('server 3');
        res.end(); 
    }).listen(8081); 
     
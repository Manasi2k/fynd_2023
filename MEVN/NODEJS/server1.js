const http=require('http');
var ts=require("./server2");
http.createServer(function (req,res){
    
        res.writeHead(200,{'Content-Type':'text/html'});
      
        res.write('server 1');
        res.end(); 
    }).listen(8002); 
     
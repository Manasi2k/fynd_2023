const http=require("http"); //import
var dt = require('./ownModule'); //calling one module from another/user defined module
//dt: todays date
http.createServer(function (req,res){
//res: response to a request(req)
//response has 3 deatures : Head/Body and a Tail
//Head : code indicating success or failure or any other status
//200 : success code , format :text/html, json,xml    
    res.writeHead(200,{'Content-Type':'text/html'});
    //update the body of the response : date coming from a different user created module
    res.write("The date and Time are currently:" + dt.getCurrentTime);
    //datetime is being fetched from the outside module
    //using the content type mentioned above as text/hrmluser definrd module
    res.end(); //ending the writing functionality for a request response function
}).listen(4007); //mentioning which port our application will run on the server
 
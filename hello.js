var http= require('http');
var currentDate=require('./mymodule');

var upper=require('upper-case');
//import {upper} from "upper-case";



console.log(currentDate.omer())

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(upper.upperCase(req.url));
   
    res.write('Current date is '+currentDate.omer());
    res.end();  
    
}).listen(8080);
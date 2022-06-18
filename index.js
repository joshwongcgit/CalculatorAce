var http = require('http');
var fs = require("fs");
var jquery = require("jQuery")

http.createServer(function(req, res) {
 fs.readFile("project.html","utf8" ,function(err, contents){
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(contents);
 res.end();
 
 });
}).listen(3000);



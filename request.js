var http = require('http');
http.createServer(function(req,resp){
    resp.write("HI Manav");
    resp.end();
}).listen(4001);
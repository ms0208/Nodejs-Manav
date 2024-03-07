const http = require('http');

function datacontrol(req,resp)
{
    resp.write("<h1>Hi how are you</h1>");
    resp.end();
}
const Datacontrol = (req,resp) =>
{
    resp.write("<h1>Welcome to NodeJs</h1>");
    resp.end();
}


http.createServer((req,resp)=>{
    resp.write("<h1>Manav</h1>");
    resp.write("<h1>Pranav</h1>");
    resp.end();
}).listen(4500);

http.createServer(datacontrol).listen(4501);
http.createServer(Datacontrol).listen(4502);
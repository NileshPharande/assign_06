var http = require("http");

var serverConfig = {
    'host': '127.0.0.1',
    'port': 8000
};

try
{
    var server = http.createServer( function(req, res){
        console.log("REQUEST: ", req);
        console.log("RESPONSE: ", res);
        res.end("hello world");
    });
    server.listen(serverConfig.port, serverConfig.host, function(){
        console.log("Server is listening on " +serverConfig.host+ ":" +serverConfig.port);
    })
}
catch(error)
{
    console.log("ABNORMAL TERMINATION: ", error);
}

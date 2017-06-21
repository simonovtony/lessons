var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    if(request.url == "/some.doc") {
        response.writeHead(200, {
            "Content-Type" : "application/msword"
        });
        fs.createReadStream("some.doc")
            .pipe(response);
    } else {
        response.end("Hello World!");
    }
}).listen(3000);
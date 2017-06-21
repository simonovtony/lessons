var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html;charset=utf8");
    console.log(`Запрошенный адрес: ${request.url}`);
    if(request.url.startsWith("/public/")) {
        var filePath = request.url.substr(1);
        fs.readFile(filePath, function (error, data) {
            if (error) {
                response.statusCode = 404;
                response.end("Ресурс не найден!");
            } else {
                response.end(data);
            }
            return;
        });
    } else {
        response.end("Hello World!");
    }
}).listen(3000);
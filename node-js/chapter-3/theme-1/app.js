/*
var http = require("http");

http.createServer().listen(3000);
*/

/*
var http = require("http");

http.createServer(function (request, response) {
    response.end("Hello World!");
}).listen(3000);
*/

/*
var http = require("http");

http.createServer(function (request, response) {
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    response.end();
}).listen(3000);
*/

var http = require("http");

http.createServer(function (request, response) {
    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html");
    response.write("<h2>Hello World!</h2>");
    response.end();
}).listen(3000);
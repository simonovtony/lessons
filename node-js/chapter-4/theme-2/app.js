/*
var express = require("express");

var app = express();

app.get("/", function (request, response) {
    response.send("<h1>Главная страница</h1>");
});

app.get("/about", function (request, response) {
    response.send("<h1>О сайте</h1>");
});

app.get("/contact", function (request, response) {
    response.send("<h1>Контакты</h1>");
});

app.listen(3000);
*/

/*
var express = require("express");

var app = express();

app.use(function (request, response, next) {
    console.log("Middleware 1");
    next();
});

app.use(function (request, response, next) {
    console.log("Middleware 2");
    next();
});

app.get("/", function (request, response) {
    console.log("Route /");
    response.send("Hello");
});

app.listen(3000);
*/

/*
var express = require("express");

var app = express();

app.use(function (request, response, next) {
    console.log("Middleware 1");
    next();
});

app.use(function (request, response, next) {
    console.log("Middleware 2");
    response.send("Middleware 2");
});

app.get("/", function (request, response) {
    console.log("Route /");
    response.send("Hello");
});

app.listen(3000);
*/

/*
var express = require("express");

var app = express();

app.use(function (request, response, next) {
    console.log("Middleware 1");
    next();
});

app.use("/about", function (request, response, next) {
    console.log("About Middleware");
    response.send("About Middleware");
});

app.get("/", function (request, response) {
    console.log("Route /");
    response.send("Hello");
});

app.listen(3000);
*/

var express = require("express");
var fs = require("fs");
var app = express();

app.use(function (request, response, next) {
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(data);
    fs.appendFile("server.log", data + "\n");
    next();
});

app.get("/", function (request, response) {
    response.send("Hello");
});

app.listen(3000);
/*
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
    response.send("<h1>Главная страница</h1>");
});

app.get("/contact", function (request, response) {
    response.send("<h1>Контакты</h1>");
});

app.listen(3000);
*/

var express = require("express");
var app = express();

app.use("/static", express.static(__dirname + "/public"));

app.get("/", function (request, response) {
    response.end("<h1>Главная страница</h1>");
});

app.get("/contact", function (request, response) {
    response.send("<h1>Контакты</h1>");
});

app.listen(3000);
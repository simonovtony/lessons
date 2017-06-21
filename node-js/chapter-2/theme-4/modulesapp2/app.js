var express = require("express");

var app = express();

app.get("/", function (request, response) {
    response.end("Hello from Express!");
});

app.listen(3000);
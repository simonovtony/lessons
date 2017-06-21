var express = require("express");

var app = express();

app.set("view engine", "hbs");

app.get("/", function (request, response) {
    response.send("Главная страница");
});

app.get("/contact", function (request, response) {
    response.render("contact.hbs", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: [
            "gavgav@mycrop.com",
            "mioaw@mycrop.com"
        ],
        phone: "+1234567890"
    });
});

app.listen(3000);

/*
var express = require("express");
var app = express();

app.set("view engine", "hbs");

app.get("/", function (request, response) {
    response.send("Главная страница");
});

app.get("/contact", function (request, response) {
    response.render("contact.hbs");
});

app.listen(3000);
*/

/*
var express = require("express");
var app = express();

app.set("view engine", "hbs");

app.get("/", function (request, response) {
    response.send("Главная страница");
});

app.get("/contact", function (request, response) {
    response.render("contact.hbs", {
        title: "Мои контакты",
        email: "gavgav@mycrop.com",
        phone: "+1234567890"
    });
});

app.listen(3000);
*/
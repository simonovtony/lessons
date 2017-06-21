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

// /bok, /bk
app.get("/bo?k", function (request, response) {
    response.send(request.url);
});

app.listen(3000);
*/

/*
var express = require("express");
var app = express();

// /bok, /book, /boook, /boo...oook
app.get("/bo+k", function (request, response) {
    response.send(request.url);
});

app.listen(3000);
*/

/*
var express = require("express");
var app = express();

// /bork, /bonk, /bor.dak, /bor/ok
app.get("/bo*k", function (request, response) {
    response.send(request.url);
});

app.listen(3000);
*/

/*
var express = require("express");
var app = express();

// /book, /book.html
app.get("/book(.html)?", function (request, response) {
    response.send(request.url);
});

app.listen(3000);
*/

/*
var express = require("express");
var app = express();

app.get(/.*(\.)html$/, function (request, response) {
    response.send(request.url);
});

app.listen(3000);
*/

/*
var express = require("express");
var app = express();

app.get("/products/:productId", function (request, response) {
    response.send("productId: " + request.params["productId"]);
});

app.listen(3000);
*/

/*
var express = require("express");
var app = express();

app.get("/categories/:categoryId/products/:productId", function (request, response) {
    var catId = request.params["categoryId"];
    var prodId = request.params.productId;
    response.send(`Категория: ${catId}  Товар: ${prodId}`);
});

app.listen(3000);
*/

/*
var express = require("express");
var app = express();

app.get("/book/:pageName.:pageExt", function (request, response) {
    var pageName = request.params["pageName"];
    var pageExt  = request.params["pageExt"];
    response.send(`Запрошенный файл: ${pageName}.${pageExt}`);
});

app.listen(3000);
*/

var express = require("express");
var app = express();

var productRouter = express.Router();

productRouter.route("/")
    .get(function (request, response) {
        response.send("Список товаров");
    });

productRouter.route("/:id")
    .get(function (request, response) {
        response.send(`Товар ${request.params.id}`);
    });

app.use("/products", productRouter);

app.get("/", function (request, response) {
    response.send("Главная страница");
});

app.listen(3000);
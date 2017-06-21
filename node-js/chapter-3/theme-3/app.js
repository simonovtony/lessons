var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    fs.readFile("public/index.html", "utf8",
        function (error, data) {
            var message = "Изучаем Node.js";
            var header = "Главная страница";
            data = data
                .replace("{header}", header)
                .replace("{message}", message);
            response.end(data);
    });
}).listen(3000);
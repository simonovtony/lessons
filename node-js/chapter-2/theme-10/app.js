var fs = require("fs");

var writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");

var readableStream = fs.createReadStream("hello.txt", "utf8");
readableStream.on("data", function (chunk) {
    console.log(chunk);
});
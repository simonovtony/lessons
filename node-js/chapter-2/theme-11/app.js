/*
var fs = require("fs");

var readableStream = fs.createReadStream("hello.txt", "utf8");

var writeableStream = fs.createWriteStream("some.txt");

readableStream.on("data", function (chunk) {
    writeableStream.write(chunk);
});
*/

/*
var fs = require("fs");

var readableStream = fs.createReadStream("hello.txt", "utf8");

var writeableStream = fs.createWriteStream("some.txt");

readableStream.pipe(writeableStream);
*/

var fs = require("fs");
var zlib = require("zlib");

var readableStream = fs.createReadStream("hello.txt", "utf8");

var writeableStream = fs.createWriteStream("hello.txt.gz");

var gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writeableStream);
/*
var fs = require("fs");

fs.readFile("hello.txt", "utf8", function (error, data) {
    console.log("Асинхронное чтение файла");
    if (error) throw error;
    console.log(data);
});

console.log("Синхронное чтение файла");
var fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);
*/

/*
var fs = require("fs");

fs.writeFile("hello.txt", "Hello мир!", function (error) {
    if (error) throw error;
    console.log("Асинхронная запись файла завершена. Содержимое файла:")
    var data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);
});

console.log("Синхронная запись файла завершена. Содержимое файла:")
fs.writeFileSync("hello.txt", "Hello мир!");
var data = fs.readFileSync("hello.txt", "utf8");
console.log(data);
*/

var fs = require("fs");

fs.appendFileSync("hello.txt", "Привет ми ми ми!");

fs.appendFile("hello.txt", "Привет МИД!", function (error) {
    if (error) throw error;
    console.log("Запись файла завершена. Содержимое файла:");
    var data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);
});
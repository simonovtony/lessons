/*
var greeting1 = require("./greeting.js");
console.log(`Hello ${greeting1.name}`);

var greeting2 = require("./greeting.js");
greeting2.name = "Bob";

console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`);
*/

var welcome = require('./welcome');

welcome.getMorningMessage();
welcome.getEveningMessage();
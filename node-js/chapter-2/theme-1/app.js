/*
var os = require("os");

var userName = os.userInfo().username;

console.log(userName);
*/

/*
var greeting = require('./greeting');
*/

/*
var os = require('os');

var greeting = require('./greeting');

var userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);

console.log(greeting.getMessage(userName));
*/

var User = require("./user.js");

var eugene = new User ("Eugene", 32);

eugene.sayHi();
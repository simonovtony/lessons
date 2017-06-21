/*
var Emitter = require("events");
var emitter = new Emitter();
var eventName = "greet";

emitter.on(eventName, function () {
    console.log("Hello all!");
});

emitter.on(eventName, function () {
    console.log("Привет!");
});

emitter.emit(eventName);
*/

/*
var Emitter = require("events");
var emitter = new Emitter();
var eventName = "greet";

emitter.on(eventName, function (data) {
    console.log(data);
});

emitter.emit(eventName, "Привет пир!");
*/

var util = require("util");
var EventEmitter = require("events");

function User () { }
util.inherits(User, EventEmitter);
var eventName = "greet";
User.prototype.sayHi = function (data) {
    this.emit(eventName, data);
}

var user = new User();
user.on(eventName, function (data) {
    console.log(data);
});
user.sayHi("Мне нужна твоя одежда...");
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017", function (err, db) {
    if (err) return console.log(err);
    db.collection("users").drop(function (err, result) {
        console.log(result);
        db.close();
    });
});

/*
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017", function (err, db) {
    if (err) return console.log(err);
    db.collection("users").findOneAndDelete({
        age: 21
    }, function (err, result) {
        console.log(result);
        db.close();
    });
});
*/

/*
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017", function (err, db) {
    if (err) return console.log(err);
    db.collection("users").deleteOne({
        name: "Bob",
    }, function (err, result) {
        console.log(result);
        db.close();
    });
});
*/

/*
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017", function (err, db) {
    if (err) return console.log(err);
    db.collection("users").deleteMany({
        name: "Tom"
    }, function (err, result) {
        console.log(result);
        db.close();
    });
});
*/
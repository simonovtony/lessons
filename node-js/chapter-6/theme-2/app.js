var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/usersdb";

mongoClient.connect(url, function (err, db) {
    db.collection("users").findOne({
        name: "Bob"
    }, function (err, doc) {
        console.log(doc);
        db.close();
    });
});

/*
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/usersdb";

mongoClient.connect(url, function (err, db) {
    db.collection("users").findOne(function (err, doc) {
        console.log(doc);
        db.close();
    });
});
*/

/*
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/usersdb";

mongoClient.connect(url, function (err, db) {
    db.collection("users").find({
        name: "Tom",
        age: 45
    }).toArray(function (err, results) {
        console.log(results);
        db.close();
    });
});
*/

/*
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/usersdb";

mongoClient.connect(url, function (err, db) {
    if (err) {
        return console.log(err);
    }
    db.collection("users").find().toArray(function (err, results) {
        console.log(results);
        db.close();
    });
});
*/

/*
var mongoClient = require("mongodb").MongoClient;

var users = [
    {
        name: "Bob",
        age: 34
    },
    {
        name: "Alice",
        age: 21
    },
    {
        name: "Tom",
        age: 45
    }
];

var url = "mongodb://localhost:27017/usersdb";

mongoClient.connect(url, function (err, db) {
    db.collection("users").insertMany(users, function (err, results) {
        console.log(results);
        db.close();
    });
});
*/
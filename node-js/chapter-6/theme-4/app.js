var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017",
    function (err, db) {
        var col = db.collection("users");
        col.updateOne(
            {name: "Tom"},
            {$set: {name: "Tom Junior", age: 33}},
            function (err, result) {
                console.log(result);
                db.close();
            }
        );
    }
);

/*
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/usersdb",
    function (err, db) {
        var col = db.collection("users");
        col.updateMany(
            {name: "Sam"},
            {$set: {name: "Bob"}},
            function (err, result) {
                console.log(result);
                db.close();
            }
        );
    }
);
*/

/*
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/usersdb", function (err, db) {
    var col = db.collection("users");
    col.findOneAndUpdate(
        { name: "Bob" },
        { $set: {
            name: "Sam"
        }},
        {   // доп. опции обновления
            returnOriginal: false
        }, function (err, result) {
            console.log(result);
            db.close();
        }
    );
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

mongoClient.connect("mongodb://localhost:27017/usersdb", function (err, db) {
    var col = db.collection("users");
    col.insertMany(users, function (err, results) {
        col.findOneAndUpdate(
            {age: 21}, // критерий выборки
            { $set: {  // параметр обновления
                age: 25
            }}, function (err, result) {
                console.log(result);
                db.close();
            }
        );
    });
});
*/
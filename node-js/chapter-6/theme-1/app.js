/*
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    if (err) {
        return console.log(err);
    }
    db.close();
});
*/

var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/userdb";

mongoClient.connect(url, function (err, db) {
    var collection = db.collection("users");
    var user = {
        name: "Tom",
        age: 24
    };
    collection.insertOne(user, function (err, result) {
        if (err) {
            return console.log(err);
        }
        console.log(result.ops);
        db.close();
    });
});

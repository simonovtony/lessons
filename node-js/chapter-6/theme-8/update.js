var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersdb");

var userSchema = new Schema({
    name: String,
    age: Number
});
var User = mongoose.model("Users", userSchema);

var id = "59405643a3d6d600ec491c34";
User.findByIdAndUpdate(id, {name: "Bilbo Baggins", age: 111}, {new: true}, function (err, doc) {
    mongoose.disconnect();
    if (err) return console.log(err);
    console.log(doc);
});

//var mongoose = require("mongoose");
//var Schema = mongoose.Schema;
//mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/usersdb");
//
//var userSchema = new Schema({
//    name: String,
//    age: Number
//});
//var User = mongoose.model("Users", userSchema);
//
//var id = "59405643a3d6d600ec491c34";
//User.findByIdAndUpdate(id, {name: "Sam", age: 25}, function (err, doc) {
//    mongoose.disconnect();
//    if (err) return console.log(err);
//    console.log(doc);
//});

//var mongoose = require("mongoose");
//var Schema = mongoose.Schema;
//mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/usersdb");
//
//var userSchema = new Schema(
//    {
//        name: String,
//        age: Number
//    },
//    {
//        versionKey: false
//    }
//);
//
//var User = mongoose.model("Users", userSchema);
//
//User.update({name: "Tom"}, {name: "Tom Smith"}, function (err, results) {
//    mongoose.disconnect();
//    if (err) return console.log(err);
//    console.log(results);
//});
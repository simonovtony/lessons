var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersdb");

var userSchema = new Schema({
    name: String,
    age: Number
});

var User = mongoose.model("Users", userSchema);

User.create({name: "Tom", age: 34}, function (err, doc) {
    mongoose.disconnect();
    if (err) return console.log(err);
    console.log("Сохранен обьект user", doc);
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
//
//var User = mongoose.model("Users", userSchema);
//
//var user = new User({
//    name: "Tom",
//    age: 34
//});
//
//user.save(function (err) {
//    mongoose.disconnect();
//    if (err) return console.log(err);
//    console.log("Сохранен обьект user", user);
//});
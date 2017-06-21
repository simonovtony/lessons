var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersdb");

var userSchema = new Schema({
    name: String,
    age: Number
});

var User = mongoose.model("Users", userSchema);

var id = "59404ac0136ffc0f641e09e2";

User.findByIdAndRemove(id, function (err, doc) {
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
//
//var User = mongoose.model("Users", userSchema);
//
//User.findOneAndRemove({name: "Bob"}, function (err, doc) {
//    mongoose.disconnect();
//    if (err) return console.log(err);
//    console.log(doc);
//});

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
//var id = "59404ac0136ffc0f641e09e3";
//
//User.remove({age: 33}, function (err, docs) {
//    mongoose.disconnect();
//    if (err) return console.log(err);
//    console.log(docs);
//});

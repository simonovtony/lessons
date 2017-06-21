var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var userScheme = new Schema({
    name: String,
    age: Number
});

mongoose.connect("mongodb://localhost:27017/userdb");

var User = mongoose.model("User", userScheme);

var user = new User({
    name: "Bill",
    age: 41
});

user.save(function (err) {
    mongoose.disconnect();

    if (err) return console.log(err);
    console.log("Сохранен обьект", user);
});

user.save()
.then(function (doc) {
    console.log("Сохранен обьект", doc);
    mongoose.disconnect();
})
.catch(function (err) {
    console.log(err);
    mongoose.disconnect();
});
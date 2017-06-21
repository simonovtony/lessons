var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersdb");

var userSchema = new Schema({
    //{
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    //}
    //{ versionKey: false }
});

var User = mongoose.model("User", userSchema);

var user = new User({name: "Li"});

user.save(function (err) {
    if (err) return console.log(err);
    console.log("Сохранен обьект user", user);
});

var user = new User({name: "Tom", age: 34});

user.save(function (err) {
    if (err) return console.log(err);
    console.log("Сохранен обьект user", user);
});

process.on('uncaughtException', function (err) {
    mongoose.disconnect();
    console.error(err);
});

//var mongoose = require("mongoose");
//var Schema = mongoose.Schema;
//mongoose.Promise = global.Promise;
//
//var userSchema = new Schema({
//    //name: String,
//    //age: Number,
//    //company: {
//    //    name: String,
//    //    employee: [String], // тип массив строк
//    //    date: Date
//    //}
//    name: {
//        type: String,
//        default: "NoName"
//    },
//    age: {
//        type: Number,
//        default: 22
//    },
//});
//
//var User = mongoose.model("User", userSchema);
//var user1 = new User(); // name - NoName, age - 22
//var user2 = new User({name: "Tom"}); // name - Tom, age - 22
//var user3 = new User({age: 34}); // name - NoName, age - 34
///* Типы схемы
//   String, Number, Date, Buffer, Boolean, Array "[String]"
//   Mixed "Schema.Types.Mixed", ObjectId "Schema.Types.ObjectId"
//*/
///* Валидаторы схемы
//   type, default, required, min, max, minlength, maxlength, enum
//*/

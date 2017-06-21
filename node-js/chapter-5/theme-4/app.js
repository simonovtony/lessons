const express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello Test');
});

app.get('/error', function (req, res) {
    res.status(404).send('NotFound');
});

app.get('/user', function (req, res) {
    res.send({
        name: 'Tom',
        age: 22
    });
});

app.listen(3000);

module.exports.app = app;
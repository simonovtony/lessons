var assert = require('assert');
var operations = require('./operations');

it('should multiply two numbers', function () {
    //var expected = 15;
    var expected = 16;
    var result = operations.miltiply(3, 5);
    assert.equal(result, expected);
});

it('not should multiply two numbers', function () {
    var expected = 15;
    //var expected = 16;
    var result = operations.miltiply(3, 5);
    assert.notEqual(result, expected);
});
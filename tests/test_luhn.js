var assert = require("chai").assert;
var isValidLuhn = require("../");

// Before you begin, write a test (or multiple) for
// the function (using mocha and chai). If you find you need
// to create other functions to help with the task, write tests for them too.


describe("Cecking ", function() {
  it("should return true if number is valid according to the Luhn Algo", function() {
    var number = 0364855411;
    assert.isTrue(isValidLuhn(number));
  });
});
var assert = require("chai").assert;
var isValidLuhn = require("../luhn");

// Before you begin, write a test (or multiple) for
// the function (using mocha and chai). If you find you need
// to create other functions to help with the task, write tests for them too.


describe("Cecking ", function() {
  it("should return true if number is valid according to the Luhn Algo", function() {
    var number = 1234567897;
    assert.isTrue(isValidLuhn(number));
  });
});

describe("Cecking ", function() {
  it("should return false if number is not valid according to the Luhn Algo", function() {
    var number = 1111111111;
    assert.isFalse(isValidLuhn(number));
  });
});
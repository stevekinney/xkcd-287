var assert = require('assert');
var rejectOverbudget = require('../lib/reject-overbudget.js');

var menuItems = {
  something: 100,
  somethingElse: 200
};

describe('rejectOverbudget', function () {
  
  it('should filter out orders over the total budget', function () {
    var totalBudget = 205;
    var orders = [
      ['something', 'something'],
      ['something', 'somethingElse']
    ];
    assert.equal(rejectOverbudget(orders, totalBudget, menuItems).length, 1);
  });

});

var assert = require('assert');
var identifyCandidates = require('../lib/identify-candidates.js');

var menu = {
  something: 100,
  somethingElse: 200
};

describe('identifyCandidates', function () {

  it('should filter out orders over the total budget', function () {
    var totalBudget = 205;
    var orders = [
      ['something', 'something'],
      ['something', 'somethingElse']
    ];
    assert.equal(identifyCandidates(menu, orders, totalBudget).length, 1);
  });

  it('should reject orders that are exactly on budget', function () {
    var totalBudget = 200;
    var orders = [
     ['something', 'something']
    ];
    assert.equal(identifyCandidates(menu, orders, totalBudget).length, 0);
  });

});

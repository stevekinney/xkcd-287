var assert = require('assert');
var calculateOrderCombinations = require('../lib/calculate-order-combinations');

var menu = {
  a: 1,
  b: 2
};

describe('calculateOrderCombinations', function () {

  it('should determine what combinations of items meet the target budget', function () {
    var totalBudget = 3;
    var expectedCombinations = [
      ['a','b'],
      ['b','a'],
      ['a','a','a']
    ];
    assert.deepEqual(calculateOrderCombinations(menu, totalBudget), expectedCombinations);
  });

});
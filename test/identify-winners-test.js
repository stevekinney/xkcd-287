var assert = require('assert');
var identifyWinners = require('../lib/identify-winners.js');

var menu = {
  something: 100,
  somethingElse: 200
};

describe('identifyWinners', function(){

  it('should include only orders that sum to total budget', function () {
    var totalBudget = 200;
    var orders = [
      ['something', 'something'],
      ['something', 'somethingElse'],
    ];
    assert.deepEqual(identifyWinners(menu, orders, totalBudget), [['something', 'something']]);
  });

});
var assert = require('assert');
var orderTotal = require('../lib/order-total');

var menu = {
  something: 100,
  somethingElse: 200
};

describe('orderTotal', function () {

  it('finds the total of known items', function () {
    assert(orderTotal(menu, ['something', 'somethingElse']), 300);
  });

  it('it blows up if there is an item not on the menu', function () {
    assert.throws(function () {
      orderTotal(menu, ['notOnTheMenu']);
    }, Error);
  });

});

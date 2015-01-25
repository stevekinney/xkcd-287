var assert = require('assert');
var addItemsToAllOrders = require('../lib/add-items-to-all-orders.js');

var menu = {
  a: null,
  b: null
};

describe('addItemsToOrder', function(){

  it('should create a new order with each menu item', function(){
    var startingOrders = [['a'],['b']];
    var expectedOrders = [
      ['a', 'a'],
      ['a', 'b'],
      ['b', 'a'],
      ['b', 'b'],
    ];
    assert.deepEqual(addItemsToAllOrders(menu, startingOrders), expectedOrders);
  });

});
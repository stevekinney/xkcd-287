var assert = require('assert');
var addItemsToOrder = require('../lib/add-items-to-order.js');

var menu = {
  a: null,
  b: null
};

describe('addItemsToOrder', function(){

  it('should create a new order with each menu item', function(){
    assert.deepEqual(addItemsToOrder(menu, ['a']), [['a', 'a'], ['a', 'b']]);
  });

});
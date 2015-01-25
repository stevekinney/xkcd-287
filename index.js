var calculateOrderCombinations = require('./lib/calculate-order-combinations');
var orderTotal = require('./lib/order-total.js');
var menu = require('./data/menu');

var winningOrders = calculateOrderCombinations(menu.menuItems, menu.targetPrice);

winningOrders.forEach(function (order) {
  console.log(order, orderTotal(menu.menuItems, order))
});
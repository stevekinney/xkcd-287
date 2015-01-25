var calculateOrderCombinations = require('./lib/calculate-order-combinations');
var orderTotal = require('./lib/order-total.js');
var menu = require('./data/menu');

var winningOrders = calculateOrderCombinations(menu.menuItems, menu.targetPrice);

var startTime = new Date();

winningOrders.forEach(function (order) {
  console.log(order, orderTotal(menu.menuItems, order))
});

var endTime = new Date();

console.log("Matching Orders", winningOrders.length)
console.log({start: startTime, end: endTime, total: endTime - startTime});
var addItemsToOrder = require('./add-items-to-order.js');

module.exports = function (menu, orders) {
  return orders.map(function (order) {
    return addItemsToOrder(menu, order);
  }).reduce(function (orders, order) {
    return orders.concat(order);
  }, []);
};
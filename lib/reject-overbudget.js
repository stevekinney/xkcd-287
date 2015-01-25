var orderTotal = require('./order-total');

module.exports = function (orders, totalBudget, menu) {
  return orders.filter(function (order) {
    return orderTotal(menu, order) < totalBudget;
  });
};

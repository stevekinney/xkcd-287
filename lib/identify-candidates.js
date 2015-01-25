var orderTotal = require('./order-total');

module.exports = function (menu, orders, totalBudget) {
  return orders.filter(function (order) {
    return orderTotal(menu, order) < totalBudget;
  });
};

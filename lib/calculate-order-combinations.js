var addItemsToAllOrders = require('./add-items-to-all-orders');
var identifyCandidates = require('./identify-candidates');
var identifyWinners = require('./identify-winners');

module.exports = calculatePossibleOrders;

function calculatePossibleOrders(menu, totalBudget, orders, winningOrders) {
  orders = orders || Object.keys(menu).map(function (menuItem) {
    return [menuItem];
  });
  winningOrders = winningOrders || [];

  orders = addItemsToAllOrders(menu, orders);
  winningOrders = winningOrders.concat(identifyWinners(menu, orders, totalBudget));
  orders = identifyCandidates(menu, orders, totalBudget);

  if (orders.length === 0) return winningOrders;
  return calculatePossibleOrders(menu, totalBudget, orders, winningOrders);
}
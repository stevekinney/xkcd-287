module.exports = function (menu, order) {
  var menuItems = Object.keys(menu);
  return menuItems.reduce(function (orders, menuItem) {
    var newOrder = order.slice();
    newOrder.push(menuItem);
    orders.push(newOrder);
    return orders;
  }, []);
};
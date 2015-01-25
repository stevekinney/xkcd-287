module.exports = function (menu, order) {
  var menuItems = Object.keys(menu);
  return menuItems.reduce(function (orders, menuItem) {
    orders.push(order.concat(menuItem));
    return orders;
  }, []);
};
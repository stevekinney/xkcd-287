module.exports = function (menu, items) {
  return items.reduce(function (total, item) {
    return total + menu[item];
  }, 0);
};

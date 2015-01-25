module.exports = function (menu, items) {
  return items.reduce(function (total, item) {
    if (!menu[item]) throw new Error(item + 'is not in ' + menu);
    return total + menu[item];
  }, 0);
};

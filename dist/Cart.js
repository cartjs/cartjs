var Item = require ('./Item.js');

function Cart (options) {
  this.count = 0;
  this.items = [];

  this.productStorage = options.engine;

  this.get = function (rules) {
    return this.productStorage.get(rules);
  };

  this.list = function () {
    return this.productStorage.getAll();
  };

  this.add = function (item) {
    this.items.push(item);
    this.productStorage.add(item);
  };

  this.remove = function (item) {
    this.productStorage.remove(item);
  };

  this.flush = function () {
    this.items = [];
  };

  this.isEmpty = function () {
    return 0 === this.getItemsCount();
  };
};

Cart.prototype.getItemsCount = function () {
  return this.count;
};

module.exports = Cart;
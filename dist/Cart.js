var Item = require ('./Item.js');

function Cart (options) {
  this.productStorage = options.engine;

  this.get = function (rules) {
    return this.productStorage.get(rules);
  };

  this.list = function () {
    return this.productStorage.getAll();
  };

  this.add = function (item) {
    this.productStorage.add(item);
  };

  this.remove = function (item) {
    this.productStorage.remove(item);
  };
};

module.exports = Cart;

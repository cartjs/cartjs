var Item                = require ('./Item.js');
var ArrayProductStorage = require ('./Storage/ArrayProductStorage');

function Cart (storage) {
  this.productStorage = storage || new ArrayProductStorage();
}

Cart.prototype.get = function (id) {
  return this.productStorage.get(id);
};

Cart.prototype.list = function () {
  return this.productStorage.getAll();
};

Cart.prototype.add = function (item) {
  this.productStorage.add(item);
};

Cart.prototype.remove = function (item) {
  this.productStorage.remove(item);
};

module.exports = Cart;

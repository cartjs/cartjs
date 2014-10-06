var ProductStorage = require ('./ProductStorage')
    , _            = require ('underscore');

function ArrayProductStorage () {
  this.items = [];
};

ArrayProductStorage.prototype = new ProductStorage();

ArrayProductStorage.prototype.get = function (id) {
  return _.findWhere(this.items, {
    id: parseInt(id)
  });
};

ArrayProductStorage.prototype.getAll = function () {
  return this.items;
};

ArrayProductStorage.prototype.add = function (item) {
  this.items.push(item);
};

ArrayProductStorage.prototype.remove = function (id) {
  this.items = _.without(
    this.items,
    this.get(id)
  );
};

module.exports = ArrayProductStorage;

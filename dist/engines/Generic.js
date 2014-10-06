var ProductStorage = require ('./ProductStorage')
    , _            = require ('underscore');

function Generic () {
  this.items = [];
};

Generic.prototype = new ProductStorage();

Generic.prototype.get = function (id) {
  return _.findWhere(this.items, {
    id: parseInt(id)
  });
};

Generic.prototype.getAll = function () {
  return this.items;
};

Generic.prototype.add = function (item) {
  this.items.push(item);
};

Generic.prototype.remove = function (id) {
  this.items = _.without(
    this.items,
    this.get(id)
  );
};

module.exports = Generic;

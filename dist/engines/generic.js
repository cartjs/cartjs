var ProductStorage = require ('./productStorage')
    , _            = require ('underscore');

function Generic () {
  this.items = [];
};

Generic.prototype = new ProductStorage;

Generic.prototype.get = function (rules) {
  if (_.where(this.items, rules).length > 1) {
    return _.where(this.items, rules);
  };

  return _.findWhere(this.items, rules);
};

Generic.prototype.getAll = function () {
  return this.items;
};

Generic.prototype.add = function (item) {
  this.items.push(item);
};

Generic.prototype.remove = function (rules) {
  var items = this.get(rules);
};

module.exports = Generic;
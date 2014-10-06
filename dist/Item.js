function Item (details) {
  this.details = details;
};

Item.prototype.apply = function () {
  return this.details;
};

module.exports = Item;

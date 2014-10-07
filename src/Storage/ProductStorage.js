function ProductStorage () {};

ProductStorage.prototype = {
  add: function (item) {
    throw 'BadMethodCallException'
  },
  remove: function () {
    throw 'BadMethodCallException'
  },
  get: function () {
    throw 'BadMethodCallException'
  },
  getAll: function () {
    throw 'BadMethodCallException'
  }
};

module.exports = ProductStorage;

var Generic   = require ('./engines/Generic')
    , Cart    = require ('./cart.js');

var cart = new Cart({ engine: new Generic });

var Playstation = { id: 1, name: 'Playstation 3', quantity: 3, weight: 500 }
    , Xbox      = { id: 2, name: 'Xbox 360', quantity: 4, weight: 500 };

cart.add(Playstation);
cart.add(Xbox);

var ps3 = cart.get({ id: 1 });

console.log(ps3);
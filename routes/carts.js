
//********* factor this over for the carts page **********//

const express = require('express'),
      Cart = require('../models/cart');

const router = express.Router();

router.post('/', function(req, res){
  var cart = new Cart(req.body);

  cart.save(function(err){
      if (err){
        res.json(err);
        return
      }

      res.json(cart);
    });
});
//gets the carts
router.get('/', function(req, res) {
  Cart.find({}, function(err, carts) {
    res.json(carts);
  });
});
//a single cart
router.get('/:id', function(req, res) {
  Cart.findById(req.params.id, function(err, cart) {
    res.json(cart);
  });
});
//update the cart
router.patch('/:id', function(req, res) {
  Cart.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, cart) {
    // respond with updated game
    res.json(cart);
  });
});

// this is the delete route
router.delete('/:id', function(req, res) {
  Cart.findByIdAndRemove(req.params.id, function(err, cart) {
    res.json(true);
    console.log("carts gone")
  });
});
module.exports = router;

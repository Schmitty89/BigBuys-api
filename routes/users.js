const express = require('express'),
      User = require('../models/user');

const router = express.Router();

router.post('/', function(req, res){
  var user = new User(req.body);

  user.save(function(err){
      if (err){
        res.json(err);
        return
      }

      res.json(user);
    });
});

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    res.json(user);
  });
});
//update the game
router.patch('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, user) {
    // respond with updated game
    res.json(game);
  });
});

// this is the delete route
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    res.json(true);
    console.log("users gone son")
  });
});
module.exports = router;

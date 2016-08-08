const express = require('express'),
      Game = require('../models/game');

const router = express.Router();
//create
router.post('/', function(req, res) {
  var game = new Game(req.body);

  game.save(function(){
    res.json(game);
  });
});
//read all games
router.get('/', function(req, res) {
  Game.find({}, function(err, games){
    res.json(games);
  });

});
//read one game
router.get('/:id', function(req, res) {
  Game.findById(req.params.id, function(err, game){
      res.json(game);
  })
});
//update the game
router.patch('/:id', function(req, res) {
  Game.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, game) {
    // respond with updated game
    res.json(game);
  });
});

// this is the delete route
router.delete('/:id', function(req, res) {
  Game.findByIdAndRemove(req.params.id, function(err, game) {
    res.json(true);
  });
});


module.exports = router;

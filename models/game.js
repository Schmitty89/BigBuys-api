const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: { type: String, trim: true, default : '' },
  desc: { type: String, trim: true, default : '' },
  system: { type: String, trim: true, default : '' },
  reviews: [{
  body: { type : String, default : '' },
  createdAt: { type : Date, default : Date.now }
}],
createdAt: { type : Date, default : Date.now },
updatedAt: Date
});

//validating
GameSchema.path('title').required(true, 'Game must have a title!');
GameSchema.path('desc').required(true, 'Game must have a description!');
GameSchema.path('system').required(true, 'what platform is the game played on?');

//customers can leave game reviews
GameSchema.methods.addReview = function(review) {
  this.review.push({
    body: review.body
  });

  return this.save();
};


//always put the exprtation in on the bottom
module.exports = mongoose.model('Game', GameSchema);

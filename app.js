const express = require('express'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');
      passport = require('passport')

const app = express();


mongoose.connect('mongodb://localhost/bigbuys');

const db = mongoose.connection;
//.on checks at all times
db.on('error', function(err) {
  console.error(err);
});
//once checks only on one
db.once('open', function(){
  console.log('connected to the db')
});
//my middle ware
app.use(logger('dev'));
app.use (bodyParser.json());
//app.use('passport');



//routing
app.use('/games', require('./routes/games'));
app.use('/users', require('./routes/users'));
//server running beside the rails one on 3000
app.listen(4000, function(){
  console.log("gotta get those games goin!!");
});

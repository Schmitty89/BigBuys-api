const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  shipto: { type:String, default: ''}
});

// Validations
UserSchema.path('name').required(true, 'Name is required.');
UserSchema.path('email').required(true, 'Email is required.');
UserSchema.path('username').required(true, 'Username is required.');
UserSchema.path('shipto').required (true, 'no address? okay we\'ll give your game to charity');

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  shipTo:{
    address:{ type: String, default: '' },
    address2:{ type: String, default: '' },
    city:{ type: String, default: '' },
    state:{ type: String, default: '' },
    zip:{ type: Number, default: '' }
  }

});

// Validations
UserSchema.path('name').required(true, 'Name is required.');
UserSchema.path('email').required(true, 'Email is required.');
UserSchema.path('username').required(true, 'Username is required.');
// UserSchema.path('shipto.address').required (true, '');
// UserSchema.path('shipto.city').required (true, 'address must contain a city');
// UserSchema.path('shipto.state').required (true, 'address must contain a state');
// UserSchema.path('shipto.zip').required (true, 'address must contain a zip code');

module.exports = mongoose.model('User', UserSchema);

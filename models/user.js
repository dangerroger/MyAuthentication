const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs');
const config = require ('../config/database');

// User Schema

const UserSchema = mongoose.Schema({
name: {
  type: String,
},
email: {
  type: String,
  required: true
},
username: {
  type: String,
  required: true
},
password: {
  type: String,
  required: true
}
});

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserbyID = function(id, callback){
  User.findByID(id,callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query,callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      if (err) throw err;
        // Store hash in your password DB.
        newUser.password = hash;

        // save the password
        newUser.save(callback);
    });
  });
}

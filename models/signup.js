const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 
  name:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }
});

const User = mongoose.model('login', userSchema);

module.exports = User;




  
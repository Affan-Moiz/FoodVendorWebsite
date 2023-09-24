const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  universityID: String,
  password: String,
});

const User = mongoose.model('User', studentSchema);

module.exports = {
  User,
};

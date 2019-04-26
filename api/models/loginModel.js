var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// User Schema
console.log("in login schema");
var LoginSchema = new Schema({
  email: { type: String },
  pass: { type: String },
  phone: { type: String},
  address:{ type: String},
  fname:{ type: String},
  lname:{ type: String},
  company:{ type: String},
  dob:{ type: Date},

});

console.log("login model");
// the schema is useless so far
// we need to create a model using it
var Login = mongoose.model('logins', LoginSchema);

// make this available to our users in our Node applications
module.exports = Login;

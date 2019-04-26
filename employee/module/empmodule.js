var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// User Schema
console.log("in login schema");
var LoginSchema = new Schema({
  empid: { type: String },
  firstname: { type: String },
  lastname: { type: String},
  address:{ type: String},
  dob:{ type: Date},
  mobile:{ type: String},
  city:{ type: String}

});

console.log("login model");
// the schema is useless so far
// we need to create a model using it
var Login = mongoose.model('logins', LoginSchema);

// make this available to our users in our Node applications
module.exports = Login;

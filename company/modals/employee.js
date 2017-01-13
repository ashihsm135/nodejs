// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
/*var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});*/

var EmployeeSchema = new mongoose.Schema({
				id:{type:String, required:true, index:{unique:true}},
				name:String,
				address:String
			});

// the schema is useless so far
// we need to create a model using it
var Employee = mongoose.model('Employee', EmployeeSchema);

// make this available to our users in our Node applications
module.exports = Employee;
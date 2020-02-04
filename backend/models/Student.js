const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    rollno: {
      type: Number,
      required: true,
      unique: true
    }
  },
  {
    collection: 'students'
  }
);

studentSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Student', studentSchema);

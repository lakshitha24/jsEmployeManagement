const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    number:String,
    gender:String,
    id:String,
    photo:String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
   
  module.exports = mongoose.model("employee", employeeSchema);
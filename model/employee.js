const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstName: String,
  lastName: String,
 salary: Number
});

module.exports = mongoose.model('employee', employeeSchema);


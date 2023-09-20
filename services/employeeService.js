const Employee = require('../model/employee');
const insertEmployee = async (req) => {
  const newData = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    salary: req.body.salary
  });
  await newData.save();

  return { "status": 201, "result": "successfuly saved" }
}
const fetchAllEmployee = async (req) => {

  const result = await Employee.find();

  return { "status": 201, "result": result }
}
const updateById = async (req) => {

  const id = req.params.id;
  const updatedData = req.body;
  const options = { new: true };

  const result = await Employee.findByIdAndUpdate(
    id, updatedData, options
  )
  return { "status": 201, "result": "Successfully updated" }
}
const deleteById = async (req) => {
  const id = req.params.id;
  const fetchdata=await Employee.findById(id);
  if(fetchdata==null)
  {
    return { "status": 201, "result": "Id not available" }
  }
  const data = await Employee.findByIdAndDelete(id)
  
  return { "status": 201, "result": "Successfully deleted " }
}
module.exports = { insertEmployee, fetchAllEmployee, updateById, deleteById }
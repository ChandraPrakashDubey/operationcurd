const express = require('express');
const app = express();
const router = express.Router()
const Employee = require('../model/employee');
 const employeeController = require('../services/employeeService');
router.use(express.json());

router.post('/insertNewEmployee', async (req, res) => {
  try {
    const result = await employeeController.insertEmployee(req);
    res.status(201 || result.status).json(result);
  } catch (error) {

    res.status(500).json({ error: 'Could not create item' });
  }
});
router.get('/getAll', async (req, res) => {

  try {
    const result = await employeeController.fetchAllEmployee(req);
    res.status(201 || result.status).json(result);
  } catch (error) {

    res.status(500).json({ error: 'Data not found' });
  }
 
})
router.get('/getDataById/:id', async (req, res) => {

  const result = await Employee.find({ _id: req.params.id })
  res.send(result)
})

router.patch('/update/:id', async (req, res) => {
  try {
    
    const result=await employeeController.updateById(req);
     res.status(201 || result.status).json(result);
  
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})
router.delete('/delete/:id', async (req, res) => {
  try {
    const result=await employeeController.deleteById(req);
    res.status(201 || result.status).json(result);
    // const id = req.params.id;
    // const data = await Employee.findByIdAndDelete(id)
    // res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})



module.exports = router;
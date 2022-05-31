const router = require('express').Router();
const Employee = require('../Models/Employee');
const {verifyJwtToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyJwtToken');

//GET
router.get('/:employeeId', verifyTokenAndAuthorization , async (req, res) => {
    try {
      const employee = await Employee.findOne({employeeId: req.params.employeeId});
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
});

//GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json(error);
    }
});

//CREATE
router.post('/', verifyJwtToken,  async (req,res)=>{
    const newEmployee= new Employee(req.body)
    try {
        const savedEmployee = await newEmployee.save();
        res.status(200).json(savedEmployee)
    } catch (error) {
        res.status(500).json(error)
    }
});

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedEmployee);
    } catch (error) {
      res.status(500).json(error);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router; 
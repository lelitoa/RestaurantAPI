const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
    {
        employeeId: {
            type: String, 
            required: true
        },
        name: {
            type: String, 
            required: true
        },
        surname: {
            type: String, 
            required: true
        },
        position:{
            type:String
        }
    },
);

module.exports = mongoose.model('Employee', EmployeeSchema);
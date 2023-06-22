const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    designation: String,
    email: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
    },
    phone_no: {
        type: Number,
        limit: 10,
        // required: true,
    },
    role: {
        type: String,
        enum: ["SuperAdmin","Co-Ordinator", "Marketing", "SeniorSupervisor", "Supervisor"],
        default: "SuperAdmin",
    },
    active: { type: Boolean, default: true },
});


const EmployeeModel = mongoose.model('Employee', employeeSchema);

module.exports = EmployeeModel;
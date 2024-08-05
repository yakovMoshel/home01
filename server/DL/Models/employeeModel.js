const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
    },
    tasks: {
        type: [String],
        default: []
    },
    status: {  
        type: String,
        default: 'employee'
    }
});

export const EmployeeModel = mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema);


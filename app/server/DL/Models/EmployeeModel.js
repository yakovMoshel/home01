const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
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
        default: 'employee'
    },
    tasks: {
        type: [String],
        default: []
    }
});

export const employeeModel = mongoose.model.employee || mongoose.model('Employee', employeeSchema);

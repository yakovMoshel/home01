const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
       
    },
    password: {
        type: String,
        required: true
    },
    status: {  
        type: String,
        default: 'manager'
    },
    tasks: {
        type: [String],
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }]
});

export const ManagerModel = mongoose.models.Manager || mongoose.model('Manager', ManagerSchema);
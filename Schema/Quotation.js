const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    employeeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',

    },
    

    description: {
        type: String,
        required: true,
    },

    amount: {
        type: String,
        required: true,
    },
    


});


const quotationModal = mongoose.model('Quotation', customerSchema);

module.exports = quotationModal;
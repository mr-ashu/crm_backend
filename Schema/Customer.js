const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    employeeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',

    },
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lead',

    },

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
    alternateEmail: {
        type: String,

    },

    phone_no: {
        type: Number,
        limit: 10,
        required: true,
    },

    alternatePhone_no: {
        type: Number,
        limit: 10,

    },


    status: {
        type: String,
        required: true
    }


});


const customerModal = mongoose.model('Customer', customerSchema);

module.exports = customerModal;
const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    employeeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
       
      },
    
    name: {
        type: String,
        required: true,
    },
 
    email: {
        type: String,
        required: true,
    },
  
    phone_no: {
        type: Number,
        limit: 10,
        required: true,
    },
    workCategory: {
        type: String,
        
    },
    country: {
        type: String,
        required: true,
        
    },
     state: {
        type: String,
        required: true,
        
    },
    city: {
        type: String,
        required: true,
        
    },
    pincode: {
        type: Number,
        required: true,
        
    },
    address: {
        type: String,
        required: true,
        
    },
    sources: {
        type: String,
        required: true,
        
    },
    propertyType: {
        type: String,
        required: true,
        
    },
    leadType: {
        type: String,
        required: true,
        
    },
    area: {
        type: String,
        
    },
    note: {
        type: String,
        
    },
     followUpDate: {
        type: String,
        
    },
    

   
    active: { type: Boolean, default: true },
});


const leadModals = mongoose.model('Lead', leadSchema);

module.exports = leadModals;
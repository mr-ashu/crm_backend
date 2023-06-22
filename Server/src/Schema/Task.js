const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    employeeID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required:true
    },
   
    taskName: String,
    description: String,
    taskDesc:String,
    startDate: String,
    endDate: String,
    projectName: String,
  }, {
    versionKey : false,
    timestamps : true
  });


  const Task = mongoose.model('EmployeeTask', taskSchema);

  module.exports=Task

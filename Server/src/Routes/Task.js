const express = require("express");
const Task = require("../Schema/Task");
 
const app = express.Router();
 

app.get("/", async (req, res) => {
    
    try {

       let task=await Task.find().populate("employeeID") 
       res.status(200).send(task)
        
    } catch (e) {
        res.status(404).send(e.message)
    }
    
})


app.get("/:id", async (req, res) => {
    let {id}=req.params;

    try {

     
        let data =await Task.findOne({_id:id}).populate("employeeID")
        res.status(200).send(data)
     
       
    } catch (error) {
        res.status(500).send(error.message)
    }
   
    
})

 
 
 
 
 
app.post("/add_task",async(req,res)=>{
   
    const {description} = req.body

    try {

        const task=await Task.find()
        
         if(task){
            task.map((el)=>{
                if(el.description==description){
                    res.status(403).send("This task already exist...!")
                }
            })
        }
      
       
 
        let data =await Task.create({...req.body})
        res.status(201).send({data:data,msg:"Task assign sucessfully..! "})
  
       
    } catch (error) {
        res.status(500).send(error.message)
    }
   
     
   })


   app.get("/employee/:id",async(req,res)=>{
    let {id}=req.params;

    try {

     
        let data =await Task.find({employeeID:id}).populate("employeeID")
        res.status(200).send(data)
     
       
    } catch (error) {
        res.status(500).send(error.message)
    }
   
     
   })
  
 
   
 
 



module.exports = app;
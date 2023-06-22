const express = require("express");
 
const leadModals = require("../Schema/Lead");
require("dotenv").config();
const app = express.Router();

app.get("/", async (req, res) => {

    try {
        let lead = await leadModals.find()
        res.send(lead)

    } catch (e) {
        res.status(404).send(e.message)
    }

})


app.post("/addlead", async (req, res) => {
    
    try {
       
      let lead =await leadModals.create({...req.body})
      res.status(201).send("Sucessfully added")
    } catch (e) {
        res.status(404).send(e.message)
    }
})

 
 

 








module.exports = app;
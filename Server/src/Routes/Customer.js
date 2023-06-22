const express = require("express");
const customerModal = require("../Schema/Customer");
 
 
require("dotenv").config();
const app = express.Router();

app.get("/", async (req, res) => {

    try {
        let lead = await customerModal.find()
        res.send(lead)

    } catch (e) {
        res.status(404).send(e.message)
    }

})


app.post("/addcustomer", async (req, res) => {
    
    try {
       
        let lead =await customerModal.create({...req.body})
        res.status(201).send("Sucessfully added")

    } catch (e) {
        res.status(404).send(e.message)
    }
})

 
 

 








module.exports = app;
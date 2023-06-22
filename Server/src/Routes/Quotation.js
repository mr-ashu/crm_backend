const express = require("express");
const quotationModal = require("../Schema/Quotation");
 
require("dotenv").config();
const app = express.Router();

app.get("/", async (req, res) => {

    try {
        let lead = await quotationModal.find()
        res.send(lead)

    } catch (e) {
        res.status(404).send(e.message)
    }

})


app.post("/add_quotation", async (req, res) => {
    
    try {
       
        let lead =await quotationModal.create({...req.body})
        res.status(201).send("Sucessfully added")

    } catch (e) {
        res.status(404).send(e.message)
    }
})

 
 

 








module.exports = app;
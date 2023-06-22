const express = require("express");
const EmployeeModel = require("../Schema/Employee");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authentication } = require("../AuthMiddleware");
require("dotenv").config();


const app = express.Router();

app.get("/", async (req, res) => {

    try {
        let employee = await EmployeeModel.find()
        res.send(employee)

    } catch (e) {
        res.status(404).send(e.message)
    }

})


app.post("/add", async (req, res) => {
    const { name, designation, email, password, phone_no, role } = req.body;
    try {
        const employee = await EmployeeModel.findOne({ email: email });
        if (employee) {
            res.send({ message: "Employee allready exist..!" })
        }
        else {
            bcrypt.hash(password, 5, async function (err, hash) {
                if (err) {
                    res.send("Something went wrong, plz try again later...!")
                }
                const newEmployee = new EmployeeModel({
                    name, designation, email, password: hash, phone_no, role
                });
                try {
                    await newEmployee.save()
                    res.status(201).send({ message: 'Employee added successfully' });
                } catch (error) {
                    res.status(500).send(error.message)
                }
            })
        }

    } catch (e) {
        res.status(404).send(e.message)
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const employee = await EmployeeModel.findOne({ email })
    const hash = employee.password
    bcrypt.compare(password, hash, function (err, result) {
        if (err) {
            res.status(400).send("Something went wrong, please try again later..!")
        }
        if (result) {
            const token = jwt.sign({ employeeID: employee._id }, process.env.JWT_SECRET);
            res.cookie('jwt', token, {httpOnly: true, secure: true, sameSite: "strict"});
            res.status(200).json({ message: "Login successfull", token ,data:employee})
        }
        else {
            res.status(500).send("Invalid credentials")
        }
    });
})


 

app.patch("/:id/edit",  async (req, res) => {
    const { name, designation, email, password, phone_no, role } = req.body;
    let { id } = req.params;
    try {

    //   //  "SuperAdmin","Co-Ordinator", "Marketing", "SeniorSupervisor", "Supervisor"
    //     const e=await EmployeeModel.find({role:"Marketing",role:"Supervisor",role:"SeniorSupervisor"})
    //     if(e){
    //         res.send("Not authorised")
    //     }

        bcrypt.hash(password, 5, async function (err, hash) {
            if (err) {
                res.send("Something went wrong, plz try again later...!")
            }
            const updateEmployee = await EmployeeModel.findByIdAndUpdate({_id: id},{
                name: name,
                designation: designation,
                email: email,
                password: hash,
                phone_no: phone_no,
                role: role,

            });
            try {
                res.status(201).send({ message: 'Employee updated successfully', updateEmployee});
            } catch (error) {
                res.status(500).send(error.message)
            }
        })

    } catch (error) {
        res.status(500).send(error.message)
    }

});


app.get("/:id", async (req, res) => {
    let { id } = req.params;
    try {
        let employee = await EmployeeModel.findOne({ _id: id })
        res.send(employee)

    } catch (error) {
        res.status(404).send(error.message)
    }

})








module.exports = app;
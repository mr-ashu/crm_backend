require("dotenv").config();

const express = require("express");
const cors = require("cors");
const EmployeRoute =require("./Routes/Employee")
const TaskRoute =require("./Routes/Task")
const LeadRoute =require("./Routes/Lead")
const customerRoute =require("./Routes/Customer")
const quotationRoute =require("./Routes/Quotation")
const connect = require("./Config/db")
const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(cors());
 

app.use("/employee",EmployeRoute)
app.use("/task",TaskRoute)
app.use("/lead",LeadRoute)
app.use("/quotation",quotationRoute)
app.use("/customer",customerRoute)
app.listen(PORT, async () => {
    await connect();
    console.log(`listning to http://localhost:${PORT}`)
})
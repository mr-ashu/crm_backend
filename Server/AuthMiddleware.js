const jwt = require("jsonwebtoken");
require("dotenv").config();


const authentication = (req, res, next) => {
    

    const {token} = req.headers;

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    try {
        if(decode) {
            req.id = decode.id;
            next();
        }
        else{
            res.send("Please Login");
        }
    } catch (error) {
        return res.send(error.message);
    }
}

module.exports = {authentication}
const mongoose = require("mongoose");
require("dotenv").config();
exports.dbConnect = () => {
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("db connected succesfully with server");
    })
    .catch((error)=>{
        console.log("error in connecting db");
    })
}
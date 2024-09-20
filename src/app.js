console.log("Hello Dev Tinder App");
const express = require("express");
const connectDB = require("./config/database")
const app = express();

connectDB().then(()=>{
    app.listen(3000, () => {
        console.log("Dev Tinder Server Started Successfully on Port 3000");         
})}).catch(()=>{
    console.log("Error Occured While Connecting to Database");
})

const { adminAuth } = require("./middleware/auth");


app.use("/", (req, res) => {
  res.send("HelloDev Tinder Server Started Successfully");
});

// Handle auth middleware
app.use("/admin", (res, req) => {
  res.send("Admin Dashboard");
});

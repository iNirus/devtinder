console.log("Hello Dev Tinder App");
const express = require('express');
const app = express();

app.use("/hello",(req, res) => {
    res.send("HelloDev Tinder Server Started Successfully")
});

app.listen(3000, () => {
    console.log("Dev Tinder Server Started Successfully on Port 3000")
});
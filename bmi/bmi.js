const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,()=>{
    console.log("The port is listening at the port 3000")
})

app.get("/",(req,res)=>{
    res.sendFile( __dirname + "/index.html");
})

app.post("/",(req,res)=>{
    console.log(req.body)
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight / (height * height);
    res.send(bmi.toFixed(2));
})
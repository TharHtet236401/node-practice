const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile( __dirname + "/index.html");
});

app.post('/', (req, res) => {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send(result.toString());
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
}).on('error', (err) => {
    console.error("Error starting server:", err);
});
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log("listening at the port with /")
    res.send("<p> sending the request back </p>")
  })

app.get("/hello",(req,res)=>{
    res.send("<p>this is the hello hello</p>");
})

app.get("/contact",(req,res)=>{
    res.send("<p>Contect me with nodemon hello wrold asdf</p> ")
})

  
app.listen(3000,()=>{
    console.log("server is running at port 3000");
});



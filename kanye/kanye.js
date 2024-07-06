const express = require('express')
const app = express()
const port = 3000
const http = require('https');

url ="https://api.openweathermap.org/data/2.5/weather?q=LONDON&appid=fd52445aad525d2d56e3288df87304ae"
http.get(url, (res)=>{
    console.log(res.statusCode);

    res.on("data",(data)=>{
        const weather = JSON.parse(data);
        console.log(weather)
    })
    
})




app.listen(port,()=>{
    console.log("port is running on port 3000")
})
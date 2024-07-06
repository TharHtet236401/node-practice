// const {people,jobs} = require("./people");
// const fs = require("fs");
// console.log(jobs);



// reader = fs.ReadStream('./ninja/blog2.txt');
// writer = fs.WriteStream('./ninja/blog5.txt');

// reader.on('data',(chunk)=>{
//     console.log(chunk.toString())
//     writer.write(chunk)
// })

// reader.pipe(writer);


// fs.readFile("./ninja/blog.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// fs.writeFile("./ninja/blog2.txt","thazin hwme",(err,data)=>{
//     console.log("File Written Completed")
// })

// if(!fs.existsSync("./assets")){
//     fs.mkdir("./assets",(err)=>{
//         if(err){
//             console.log("There is an error")
//         }else{
//             console.log("File Created")
//         }
//     })
// }else{
//     fs.rmdir("./assets",(err)=>{
//         console.log(" deleted")
//     })
// }



// fs.appendFile("./ninja/blog.txt","Thar Htet Aung",(err)=>{
//     if(err){
//         console.log("There is an error")
//     }
//     else{
//         console.log("Appended")
//     }
// })


const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
   
    res.statusCode = 300;

    res.setHeader('Content-Type', 'text/html')
    console.log(res)

    path = "./assets/"
    switch(req.url){
        case '/':
            path+="index.html";
            break;
        case "/about":
            path+="about.html";
            break;
        case "/help":
            path+="help.html";
            break;
        default:
            path+="error.html"
    }

    fs.readFile(path,(err,data)=>{
        if (err){
            res.end()
        }
        else{
            res.write(data);
            res.end()
        }
    })
    
})

server.listen(3000,"localhost",()=>{
    console.log("listening the request from port 3000 and edited")
})
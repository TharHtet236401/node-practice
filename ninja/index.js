const {people,jobs} = require("./people");
const fs = require("fs");
console.log(jobs);



reader = fs.ReadStream('./ninja/blog2.txt');
writer = fs.WriteStream('./ninja/blog5.txt');

// reader.on('data',(chunk)=>{
//     console.log(chunk.toString())
//     writer.write(chunk)
// })

reader.pipe(writer);


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



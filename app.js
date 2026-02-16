// const index= require("./index");

// console.log(index.addNo(2,3))

// console.log(index.subNo(2,3))

//File Handling 

const fs = require("fs")
//in scyn Write file ....
//fs.writeFileSync("./text.txt","Hello world");

// //Ascyc
//fs.writeFile("./rahul.txt","Hello world2",(err)=>{});

//in sync Read file 
// const result=fs.readFileSync("./rahul.txt","utf-8")
// console.log(result)

// //in Async Read File
// const result2=fs.readFile("./text2.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err.Error)
//     }else{

//         console.log(data)
//     }
// })

//Append File Handling
// //in Async append 
// const result3=fs.appendFile("text2.txt","\n this is new file system",(err)=>{
//     console.log("result3")
// })
// //in sycro
// const result4=fs.appendFileSync("text.txt","\n this is file handling")
// console.log(result4)

// //Delete File system
// //in sync :- Blocking code
// console.log("hello student") 
// fs.unlinkSync("text.txt")
// console.log("the file are deleted")

// // in asyncro: non-blocking code 
fs.unlink("rahul.txt",(err)=>{
    if(err) throw Error
    console.log("the file are deleted")
})











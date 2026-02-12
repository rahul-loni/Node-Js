const fs= require("fs")


//write file
//sync...and blocking code 
fs.writeFileSync("./rahul.txt","Hello Rahul Kumar How  are you ");

//Async... Non-Blocking code 

fs.writeFile("text.txt","this is Async file",(err)=>{});

//Read File 
//Sync 
// const result=fs.readFileSync("./ismt.txt","utf-8")
// console.log(result)


const result1=fs.readFile("./ismt.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
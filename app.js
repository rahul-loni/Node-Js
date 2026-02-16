// const index= require("./index");

// console.log(index.addNo(2,3))

// console.log(index.subNo(2,3))

//File Handling 

const fs = require("fs")
//in scyn Write file ....
//fs.writeFileSync("./text01.txt","Hello world this is rahul");

// //Ascyc
 fs.writeFile("./rahul.txt","Hello world2",(err)=>{});
 

//in sync Read file 
// const result=fs.readFileSync("./text1.txt","utf-8")
// console.log(result)

// // //in Async Read File
// const result2=fs.readFile("./text.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err.Error)
//     }else{

//         console.log(data)
//     }
// })

//Append File Handling
// //in Async append 
// const result3=fs.appendFile("text.txt","\n this is new file system",(err)=>{
//     console.log("result3")
// })
// //in sycro
const result4=fs.appendFileSync("text.txt","\n this is file handling")
console.log(result4)

// //Delete File system
// //in sync :- Blocking code

fs.unlinkSync("text.txt")
console.log("the file are deleted")

// // in asyncro: non-blocking code 
fs.unlink("rahul.txt",(err)=>{
    console.log("the file are deleted")
})

//in Async create folder
fs.mkdir('myFolder', (err) => {
    if (err) {
        console.error('Error creating folder:', err.message);
    } else {
        console.log('Folder created successfully');
    }
});


try {
    fs.mkdirSync('myFolderSync');
    console.log('Folder created successfully (Sync)');
} catch (err) {
    console.error('Error creating folder:', err.message);
}











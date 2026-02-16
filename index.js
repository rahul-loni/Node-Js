// // function addNo(a,b){
// //     return a+b;
// // }
// // function subNo(a,b){
// //     return a-b;
// // }
// // // console.log(addNo(20,30))

// // module.exports={
// //     addNo,
// //     subNo 

// // }



// function addNo(a,b){
//     return a+b
// }
// function subNo(a,b){
//     return a-b
// }

// module.exports={
//     addNo,
//     subNo
// }
// Import the http module
const http = require('http');

// Define server hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World rahul kumar!\n');
});

// Start server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

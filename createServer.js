// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req, res) => {

//   const log = `${Date.now()}: ${req.url} New Req Received\n`;

//   fs.appendFile("log.txt", log, (err, data) => {

//     switch (req.url) {

//       case "/":
//         res.end("HomePage");
//         break;

//       case "/about":
//         res.end("About Page");
//         break;

//       default:
//         res.end("404 Not Found");
//         break;
//     }

//   });

// });

// myServer.listen(8000, () => {
//   console.log("Server started on port 8000");
// });


// const http = require("http");

// const myServer = http.createServer((req, res) => {
//   console.log("New Req Rec.");
//   res.end("Hello From Server");
// });

// myServer.listen(8000, () => console.log("Server Started!"));


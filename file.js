// const fs = require("fs")
//sync
// fs.writeFileSync("./test.txt", "Hello World");

//Async
// fs.writeFile("./test2.txt", "Hello World Async jjjj", () => {});


// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

// fs.appendFileSync("./test.txt", `Hey There\n`)

// const http = require("http")
// const fs = require("fs")

// const myServer =  http.createServer((req, res)=> {
//     const log =`${Date.now()}: New Req Recived\n`;
//     const vlog =`${Date.now()}: Qari Bandr e oye\n`;
//     fs.writeFile("log.txt", log, (err, data) =>{
//     res.end("Hello From Server Again");
// });
// fs.appendFile("log.txt", vlog, () => {
//     res.end("File Updated Successful")
//   })
// });

// myServer.listen(8000, () =>  console.log("Sever Started") );

const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req Recived\n`;
  const vlog = `${Date.now()}: Qari Bandr e oye\n`;

  // First, write the initial log message
  fs.writeFile("log.txt", log,  (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.end("Error occurred while writing initial log");
      return;
    }

    // Send the first response
    res.write("Hello From Server Again\n");

    // Then, append the second log message
    fs.appendFile("log.txt", vlog, (err) => {
      if (err) {
        console.error("Error appending file:", err);
        res.end("Error occurred while appending log");
        return;
      }

      // Send the second response
      res.end("File Updated Successfully");
     switch(req.url){
        case'/': res.end("HomePage");
        break
        case'/about': res.end("About Us");
        break
        case'/Contact-us': res.end("Contact Us For Being a Businessman")
     }

    });
  });
});

myServer.listen(8007, () => console.log("Server Started"));

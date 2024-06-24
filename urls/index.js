const http = require("http");

const fs = require("fs");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const fileData = `imran :: full stack kal lagay ga pata ::: ${req.url}\n`;
  fs.appendFile("./userLogInfo.txt", fileData, () => {
    switch (req.url) {
      case "/":
        res.end("homme page");
        break;
      case "/about":
        res.end("This is About Page");
        break;
      case "/setting":
        res.end("This is Setting Page");
        break;
      default:
        res.end("404 page not found");
        break;
    }
  });
});
myServer.listen(9000, () => console.log("server start"));

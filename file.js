const fs = require("fs")
//sync
// fs.writeFileSync("./test.txt", "Hello World");

//Async
// fs.writeFile("./test2.txt", "Hello World Async jjjj", () => {});


const result = fs.readFileSync("./contacts.txt", "utf-8")
console.log(result);

fs.appendFileSync("./test.txt", `Hey There\n`)
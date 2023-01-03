// const path = require("path");
// const mypath = "G:/PH-Backend/Node/index.js";
// console.log(path.parse(mypath));

// const os = require("os");
// console.log(os.freemem());

// const fs = require("fs");
// fs.writeFileSync("myfill.txt", "This is practice folder");
// fs.appendFileSync("myfill.txt", " append fill Lerning");

// const data = fs.readFileSync("myfill.txt");
// console.log(data.toString());
//async wayte
// fs.readFile("myfill.txt", (err, data) => {
//   console.log(data.toString());
// });

// Evens modile

const School = require("./School");
const school = new School();

school.on("bellring", ({ period, text }) => {
  console.log(`we need to run for home ${period} ${text}`);
});

school.startPereod();

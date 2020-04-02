const fs = require("fs");
const text = fs.readFileSync(process.argv[2], "utf8");
let aff = text.split("\n");
console.log(aff.length - 1);

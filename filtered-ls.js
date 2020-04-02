const path = require("path");
const fs = require("fs");
let arg2 = process.argv[2];
let arg3 = "." + process.argv[3];
fs.readdir(arg2, (err, data) => {
  if (err) throw err;
  else {
    data.map(el => path.extname(el) === arg3 && console.log(el));
  }
});

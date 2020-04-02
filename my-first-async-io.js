const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) {
    throw err;
  } else {
    let text = data.split("\n");
    console.log(text.length - 1);
  }
});

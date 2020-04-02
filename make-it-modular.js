var dir = process.argv[2];
var extension = process.argv[3];
var mymodule = require("./mymodule.js");
mymodule(dir, extension, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

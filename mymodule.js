var fs = require("fs");
var path = require("path");

module.exports = function(dir, extension, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      list.forEach(
        el => path.extname(el) === "." + extension && callback(null, el)
      );
    }
   
  });
};

const fs = require("fs");


const cat =  (argument) => {fs.readFile(argument, "utf8", (err, data) => {
  if (err) {
     // return
    throw err;
  } else {
    process.stdout.write(data)
  }
});
}

module.exports = cat
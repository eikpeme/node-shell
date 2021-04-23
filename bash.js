const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim().split(" ")[1];
  process.stdout.write(cmd);
  process.stdout.write("\nprompt > ");
  cat(cmd);
});

//pwd();

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log("start");
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  ` A little edit : first file text -> ${first} second file text -> ${second}`,
  { flag: "a" }
);

console.log("done with the task");
console.log("starting next task");

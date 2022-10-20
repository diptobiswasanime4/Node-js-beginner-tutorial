const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  //   console.log(first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // console.log(second);
    writeFile(
      "./content/result-async.txt",
      `Here is the result : Text from the 1st file -> ${first} Text from the 2nd file -> ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(
        //   `This is the result which will be undefined : ${result}\nNow check the result-async file in content folder.`
        // );
        console.log("done with the task");
      }
    );
  });
});
console.log("starting next task");

const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder); // create data folder
  console.log("data folder created");
}

const filepath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filepath, "hello from node js");
console.log("file created successfully");

const readcontentfromFile = fs.readFileSync(filepath, "utf8");
console.log("file content :", readcontentfromFile);

fs.appendFileSync(filepath, "\n this isa new line added to that file");
console.log("new file content added");

// asyncway of creating file

const asyncFilePath = path.join(dataFolder, "asunc-example.txt");
fs.writeFile(asyncFilePath, "hello ,asunc node js", (err) => {
  if (err) throw err;
  console.log("asunc file is created successfully");
  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("asunc file content", data);
    fs.appendFile(
      asyncFilePath,
      "\nthis ia a new line added to async file",
      (err) => {
        if (err) throw err;
        console.log("New line added to async");
      }
    );
  });
});

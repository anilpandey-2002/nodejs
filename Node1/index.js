// method 1
const fs = require("fs");

// fs.readFile("anil.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// method 2
// const fs = require("fs").promises;
// fs.readFile("anil.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// method 3
// const fs = require("fs").promises;
// async function readFile() {
//   try {
//     const data = await fs.readFile("anil.txt", "utf8");
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// readFile();

// fs.writeFile("anil.txt", "Hello, World!", (err) => {
//   if (err) throw err;
//   console.log("File has been saved!");
// });

// fs.appendFile("anil.txt", "More data!", (err) => {
//   if (err) throw err;
//   console.log("Data has been appended!");
// });

// fs.unlink('anil.txt', (err) => {
//   if (err) throw err;
//   console.log('File has been deleted!');
// });

// fs.rename("anil.txt", "anilpandey.txt", (err) => {
//   if (err) throw err;
//   console.log("File has been renamed!");
// });

// fs.mkdir(
//   "C:\\Users\\anill\\OneDrive\\Desktop\\Node\\hi",
//   { recursive: true },
//   (err) => {
//     if (err) throw err;
//     console.log("Directory created!");
//   }
// );

// fs.readdir('path/to/dir', (err, files) => {
//   if (err) throw err;
//   console.log(files);
// });

// fs.rmdir('path/to/dir', { recursive: true }, (err) => {
//     if (err) throw err;
//     console.log('Directory removed!');
//   });
// fs.copyFile('source/path/file.txt', 'destination/path/file.txt', (err) => {
//     if (err) throw err;
//     console.log('File copied successfully!');
//   });

// fs.stat('path/to/file.txt', (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File Stats:', stats);
//   console.log('Is file:', stats.isFile());
//   console.log('Is directory:', stats.isDirectory());
//   console.log('Size:', stats.size);
//   console.log('Created:', stats.birthtime);
//   console.log('Modified:', stats.mtime);
// });

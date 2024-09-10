// PATH MODULE

// const path = require("path");
// console.log(path.basename("C:UsersanillOneDriveDesktopNode"));

// console.log(path.basename(__filename, ".js"));
// console.log(path.dirname("C:UsersanillOneDriveDesktopNode"));

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(__dirname);
// console.log(__filename);

// console.log(path.extname(__filename));

// console.log(path.join("/search", "label", "/oop"));
// // goes one level back
// console.log(path.join("/search", "label", "/oop", "yes", ".."));
// console.log(path.join("/search", "label", "/oop", "yes", "..", ".."));

// // can create path
// console.log(path.join(__dirname, "index.js"));

// console.log(path.normalize("c:\\temp\\\\foo\\ bar"));
// console.log(path.normalize("c:\\temp\\////\\foo\\\bar\\..\\"));

// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base);
// console.log(path.parse(__filename).name);

// OS MODULE
// const os = require("os");
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());
// console.log(os.uptime());
// console.log("Free Memory:", os.freemem());

// URL MODULE
// const { URL, URLSearchParams } = require("url");
// const myURL = new URL("https://example.com:8080/path?name=aniil&age=25#a");
// console.log(myURL.hostname);
// console.log(myURL.hash);
// console.log(myURL.host);
// console.log(myURL.href);
// console.log(myURL.port);
// console.log(myURL.toJSON);
// console.log(myURL.toString);
// console.log(myURL.searchParams.get("name")); // Outputs: 'anil'

// EVENT MODULE
// It allows you to create, handle, and listen to events in your application, making it possible to build highly interactive and responsive systems.
// const EventEmitter = require("events");
// // Create a new instance of EventEmitter
// const myEmitter = new EventEmitter();
// let m = 0;

// // Define an event listener for the 'event' event
// myEmitter.on("event", () => {
//   console.log(`Hello, ${++m}!`);
// });
// // myEmitter.once("event", () => {
// //   console.log(`Hello, ${++m}!`);
// // });

// // Trigger (emit) the 'event' event with a parameter
// myEmitter.emit("event");
// myEmitter.emit("event");
// myEmitter.emit("event");

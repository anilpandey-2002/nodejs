const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, "goood", { "Content-Type": "text/html" });

  // if (req.url === "/") {
  //   res.end("<h1>Home Page</h1>");
  // } else if (req.url === "/about") {
  //   res.end("<h1>about Page</h1>");
  // } else {
  //   res.end("<h1>page not found</h1>");
  // }

  if (req.url === "/") {
    fs.readFile("./public/home.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {
    res.end("<h1>page not found</h1>");
  }
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
// The server listens on port 8000
server.listen(PORT, HOST, () => {
  console.log("Server running at http://127.0.0.1:8000/");
});

const http = require("http");

const server = http.createServer((req, res) => {
  // req kaha se ara ha
  console.log(req.url);
  console.log(req.method);

  // Handle the request and send a response
  //   res.statusCode = 200; // Set the status code to 200 (OK)
  //   res.statusMessage = "GOOD";
  //   res.setHeader("Content-Type", "text/plain"); // Set the Content-Type header
  res.writeHead(200, "goood", { "Content-Type": "text/plain" });
  res.end("Hello,Anil\n"); // End the response with 'Hello, world!'
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
// The server listens on port 3000
server.listen(PORT, HOST, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

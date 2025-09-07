const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("home Page");
  } else if (url === "/projects") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Projects");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("page not found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is now listenning to port ${port}`);
});

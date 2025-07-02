const http = require("http");
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from user-service on ECS!\n");
}).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

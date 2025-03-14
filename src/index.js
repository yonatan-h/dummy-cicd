import http from "http";

const server = http.createServer((req, res) => {
  res.end("Server is running");
});

const PORT = process.env.port || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

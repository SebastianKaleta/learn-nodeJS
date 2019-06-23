// const http = require("http");
// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end("<h1>Witaj na stronie, stworzonej w Node.js!</h1>");
//   })
//   .listen(3000, "127.0.0.1");

// Inny sposób - dłuższy

const http = require("http");
const server = http.createServer();
server.addListener("request", (req, res) => { //można również używać .on zamiast .addListener, zamiast (req,res)=>..., można wstawić handleRequest, czyli zewnetrzny plik z logiką serwera
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("Dzień dobry!!!");
});

server.listen(4400, "127.0.0.1");
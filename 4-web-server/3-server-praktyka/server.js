const http = require('http');
const port = process.env.PORT || 3000
http.createServer((req, res) => {
  // console.log(req.url);
  // console.log(req.method);
  if (req.url === "/") {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8'
    })
    res.end(`<h1>Strona główna</h1>`)
  } else if (req.url === "/users") {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8'
    })
    res.end(`<h1>Strona użytkowników</h1>`)
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html;charset=utf-8'
    })
    res.end(`<h1>Error: Page not found</h1>`)
  }

  // res.end(`<h1>${req.url}</h1>`)
}).listen(port, '127.0.0.1', () => {
  console.log(`Nasz serwer nasłuchuje na porcie ${port}`);
})
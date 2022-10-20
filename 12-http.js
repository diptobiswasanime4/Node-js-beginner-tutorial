const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.write("Welcome to our homepage");
  //   res.end();
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("This is our about page");
    return;
  }
  res.end(`
  <h1>Oops!!!</h1>
  <p>We can't find the page you're looking for</p>
  <a href="/">Home Page</a>
  `);
  return;
});

server.listen(5000);

var http = require("http");
http
  .createServer(function (req, res) {
    //     res.writeHead(200, { "Content-Type": "text/plain" });
    if (req.url == "/") {
      res.write("This is home for the web site ");
      res.end();
    } else if (req.url == "/about") {
      res.write("This is home for the web site  of about");
      res.end();
    } else {
      res.write("Not Found ");
      res.end();
    }
  })
  .listen(8080);

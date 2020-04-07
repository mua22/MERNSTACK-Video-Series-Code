const http = require("http");

http
  .createServer(function (req, res) {
    console.log(req.url);

    switch (req.url) {
      case "/":
        res.write("<h1>My Home Page</h1>");
        break;
      case "/hobbies.html":
        res.write("<h1>My Hobbies</h1>");
        break;

      default:
        res.write("page not found");
        break;
    }
    res.end();
  })
  .listen(8080);

var http = require("http");
var url = require("url");
var fs = require("fs");

var PORT = 8080;

var handlerRequest = function (req, res){
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname){
    case "/":
      display_page("index.html", req, res);
      break;
    case "/home":
      display_page("index.html", req, res);
      break;
    case "/food":
      display_page("food.html", req, res);
      break;
    case "/movie":
      display_page("movies.html", req, res);
      break;
    case "/css":
      display_page("css.html", req, res);
      break;
    default:
      display_404(req, res);
      break;
  };
};

var server = http.createServer(handlerRequest);

server.listen(PORT, function(){
  console.log("Server is listening at http://localhost:%s", PORT)
});


var display_page = function(page, req, res) {
  fs.readFile(page, function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(data);
  });
}

var display_404 = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h1>Not found</h1>");
  res.end("This is not the page you are looking for");
}




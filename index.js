var http = require("http");

var nicePORT = 8080;

var handlerRequest = function (req, res){
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname){
    case "/index":
      display_root(req, res);
      break;
    case "/food":
      display_food(req, res);
      break;
    case "/movies":
      display_movies(req, res);
      break;
    case "/css_":
      display_css(req, res);
      break;
    default:
      display_404(req_res);
      break;
  }
};

var display_root = function(req, res){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end();
}

var display_food = function(req, res){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end();
}

var display_movies = function(req, res){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end();
}

var display_css = function(req, res){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end();
}

var server = http.createServer(handlerRequest);

Server.listen(PORT, function(){
  console.log("Server is listening at http://localhost:%s", PORT)
});


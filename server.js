var http = require("http");



var nicePORT = 7000;
var handlerRequestNice = function (req, res){
  res.end ("You're Awesome");
};
var niceServer = http.createServer(handlerRequestNice);

niceServer.listen(nicePORT, function(){

});




var meanPORT = 7500;
var handlerRequestMean = function (req, res){
  res.end ("You're Terrible");
};
var meanServer = http.createServer(handlerRequestMean);
meanServer.listen(meanPORT, function(){

});
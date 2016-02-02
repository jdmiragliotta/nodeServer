var http = require("http");

var nice = [" You are awesome", "You are a great friend", "I can always count on you"]

var nicePORT = 7000;
var handlerRequestNice = function (req, res){
  var num = Math.floor(Math.random()*nice.length);
  res.end (nice[num]);
};
var niceServer = http.createServer(handlerRequestNice);

niceServer.listen(nicePORT, function(){

});


var mean = [" You are terrible", "You are a paper friend", "You are never there for me"]


var meanPORT = 7500;
var handlerRequestMean = function (req, res){
  res.end ("You're Terrible");
};
var meanServer = http.createServer(handlerRequestMean);
meanServer.listen(meanPORT, function(){

});
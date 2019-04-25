var express = require("express");
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

var server = app.listen(port, function(){
  var port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});

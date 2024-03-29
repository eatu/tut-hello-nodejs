var http = require("http");
var url = require("url");

function start(route, process) {

  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '" + postDataChunk + "'.");
    });

    request.addListener("end", function() {
      console.log("Data end received for " + pathname);
      route(process, pathname, response, postData);
    });
  }

  http.createServer(onRequest).listen(8888);
  console.log("server has started");
}

exports.start = start;

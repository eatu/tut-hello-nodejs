var exec = require("child_process").exec;
var querystring = require("querystring");

function sleep(second) {
  var startTime = new Date().getSeconds();
  console.log(startTime + " + " + second);
  while (new Date().getSeconds() < startTime + second) {
    console.log(new Date().getSeconds());
  }
}

function start(response, postData) {
  console.log("'START' being processed");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function hello(response, postData) {
  console.log("'HELLO' being processed");

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

function list(response, postData) {
  console.log("'LIST' being processed");
  var result = "nil";
  exec("ls -lah", function(error, stdout, stderr){
    result = stdout;
    console.log("real result is " + result);
    response.writeHead(200, {"contend-type": "text/plain"});
    response.write(result);
    response.end();
  });
}

function upload(response, postData) {
  console.log("'UPLOAD' being processed");
  response.writeHead(200, {"contend-type": "text/plain"});
  response.write("You've sent the text: "+ querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.list = list;
exports.upload = upload;
exports.hello = hello;

var server = require("./server.js");
var router = require("./router.js");
var processor = require("./requestProcessor");

var process = {};
process["/"] = processor.start;
process["/start"] = processor.start;
process["/list"] = processor.list;
process["/upload"] = processor.upload;

server.start(router.route, process);

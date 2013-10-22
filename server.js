var http = require("http");
var url = require("url");

function start(route,handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
	console.log(pathname);
    console.log("Request for " + pathname + " received.");

	route(handle,pathname,response);

    //response.writeHead(200, {"Content-Type": "text/html"});
    //response.write("Hello World");
	//response.write('<p><input type="text" name="txt1" value="'+pathname+'"></p>');
	//response.write('<p><input type="text" name="txt2" value="'+pathname+'"></p>');
    //response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
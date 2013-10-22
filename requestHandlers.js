var exec = require("child_process").exec;

function start(response){
	console.log("this is a function of start is called");
	function sleep(milliSeconds){
		var the_time = new Date().getTime();
		while(new Date().getTime()<the_time + milliSeconds);
	}
	//sleep(5000);
	/*exec("ls -lah",function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});*/
	var result = 0;
	var i = 0;
	for(i=0;i<10000000000;i++){
		result = result + i;
	}
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write('<p>The result is :'+result+'</p>');
	response.write('<font style="color:red">I wake up!('+(new Date())+')</font>');
	response.end();
	console.log("I wake up!");
}

function upload(response){
	console.log("this is a function of upload is called");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;
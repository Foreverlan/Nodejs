var http = require('http');
var url = require('url');

function start(route){
	function onRequest(request, response){
		console.log(request);
		var pathName = url.parse(request.url).pathname;
		console.log('Request for ' + pathName + 'received.');

		route(pathName);

		response.writeHead(200,{'content-Type':'text/plain'});
		response.write('hello world!');
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log('server has started.');
}

exports.start = start;
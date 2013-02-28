var http = require('http');

var options = {
	port: 3500
};

var content = '';
http.createServer(function (req, res) {
	console.log('request url', req.url);
	console.log('request method', req.method);
	if (req.method === 'POST') {
		req.on('data', function(chunk) {
			content += chunk;
		});
		req.on('end', function() {
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.end('{}');
			content = JSON.parse(content);
			console.log('received', content);
		});
	} else {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(content));
	}
}).listen(options.port);
console.log('server has started at port', options.port);

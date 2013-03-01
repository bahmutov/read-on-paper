var http = require('http');
var fs = require('fs');
var _ = require('lodash');

var options = {
	port: 3500
};

var content = '';
http.createServer(function (req, res) {
	console.log('request url', req.url);
	console.log('request method', req.method);

	switch (req.url) {
		case '/':
		if (req.method === 'POST') {
			req.on('data', function(chunk) {
				content += chunk;
			});
			req.on('end', function() {
				res.writeHead(200, {
					'Content-Type': 'application/json'
				});
				res.end('{}');
				// content = JSON.parse(content);
				content = {
					url: 'url',
					content: content.replace('[object Object]', '')
				};
				console.log('received', content);
			});
		} else if (req.method === 'GET') {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			var page = formPage(content);
			res.end(page);
		}
		break;
		case '/content':
			res.writeHead(200);
			res.end(content.content);
		break;
		case '/readability.css':
			console.log('serving css');
			res.writeHead(200, {
				'Content-Type': 'text/css'
			});
			res.end(fs.readFileSync('readability.css', 'utf8'));
		break;
		case '/lightpaperfibers.png':
			res.writeHead(200, {
				'Content-Type': 'image/png'
			});
			res.end(fs.readFileSync('lightpaperfibers.png'));
		break;
		case '/live.js':
			console.log('serving live.js');
			res.writeHead(200, {
				'Content-Type': 'application/javascript'
			});
			res.end(fs.readFileSync('live.js', 'utf8'));
		break;
		default:
			console.error("Don't know what to do with " + req.url);
	};
}).listen(options.port);
console.log('server has started at port', options.port);

function formPage(options) {
	var page = '<!DOCTYPE HTML>\n<html>\n<head>\n';
	page += '<title>Read On Paper</title>\n';
	page += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n';
	page += '<link rel="stylesheet" href="./readability.css" type="text/css">\n';
	// page += '<script type="text/javascript" src="live.js"></script>';
	page += '</head>\n';
	page += '<body class="style-classy">\n';
	// page += _.unescape(options.content);
	page += options.content;
	page += '</body>\n</html>';
	fs.writeFileSync('sample.html', page, 'utf8');
	return page;
}
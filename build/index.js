'use strict';

var http = require('http');

var svr = http.createServer(handler);
svr.listen(8081);

function handler(req, res) {
  console.log('url:', req.url);
  console.log('methos:', req.method);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>LIVING FAILURES<h1>\n');
}
//# sourceMappingURL=index.js.map
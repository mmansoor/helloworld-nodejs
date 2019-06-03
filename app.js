const http = require('http');
var request = require('request');
var os = require( 'os' );

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  var networkInterfaces = os.networkInterfaces( );


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head></head><bod>\n');

  res.write('<h1>Hello World</h1>');
  res.write('<br/>\n ' + os.hostname());
  res.end('</body></html>')



});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

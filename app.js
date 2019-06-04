const http = require('http');
var request = require('request');
var os = require( 'os' );

const hostname = os.hostname();
const port = 8081;

const server = http.createServer((req, res) => {
  var networkInterfaces = os.networkInterfaces( );


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head></head><bod>\n');

  res.write('<h1>Hello World</h1>');
  res.write('<br/>\n ' + os.hostname()+'\n');
  res.end('</body></html>\n')



});

server.listen(port, os.hostname(), () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

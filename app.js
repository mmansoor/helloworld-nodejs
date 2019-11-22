/*
var AWSXRay = require('aws-xray-sdk');

AWSXRay.captureHTTPsGlobal(require('http'));

AWSXRay.config([AWSXRay.plugins.EC2Plugin,AWSXRay.plugins.ElasticBeanstalkPlugin]);

AWSXRay.captureHTTPsGlobal(require('os'));
*/

var http = require('http');

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
  res.write('<br/>Build #1008 - DEV Channel\n');
  res.end('</body></html>\n')


});

server.listen(port, os.hostname(), () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

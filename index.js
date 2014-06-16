#! /usr/bin/env node

var http = require('http');
var test = require('./test.js');

test();

var server = http.createServer(function(req, res){
  res.end('Hello world');
});

server.listen(8080);

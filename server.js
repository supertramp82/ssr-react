require('babel-register')({
  presets: ['react'],
});

var express = require('express');
var app = express();
var React = require('React');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component');

app.get('/', function(req, res) {
  var html = ReactDOMServer.renderToString(
    React.createElement(Component)
  );
  res.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
  console.log('http://localhost:' + PORT);
});
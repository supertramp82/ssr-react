require('babel-register')({
  presets: ['react'],
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./component');

app.use(express.static('public'));

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

require('babel-register')({
  presets: ['react'],
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./component');
var request = require('sync-request');

app.use(express.static('public'));

function jsonEscape(str) {
  if (str)
    return str
      .replace(/\n/g, '')
      .replace(/\r/g, '')
      .replace(/\t/g, '');
}

app.get('/', function(req, res) {
  var data = request(
    'GET',
    'https://jsonplaceholder.typicode.com/photos/1'
  );

  var props = data.getBody('utf8');

  var url = props ? JSON.parse(jsonEscape(props)).url : '';

  var html = ReactDOMServer.renderToString(
    React.createElement(Component, { url: url }, '')
  );
  res.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
  console.log('http://localhost:' + PORT);
});

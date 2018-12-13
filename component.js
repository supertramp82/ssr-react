var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  _handleClick: function() {
    alert();
  },

  render: function() {
    return (
      <html>
        <head>
          <title>Universal app with React</title>
          <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
          <div>
            <h1>Hello World!</h1>
            <p>Server-side rendering...</p>
            <button onClick={this._handleClick}>Click</button>
          </div>
        </body>
      </html>
    );
  },
});

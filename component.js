import React from 'react';
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  //class ClientComponent extends React.Component {
  _handleClick() {
    alert('You just clicked a button...');
  },

  render() {
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
          <script src="./bundle.js" />
        </body>
      </html>
    );
  },
});

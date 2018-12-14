import React from 'react';
import { runInThisContext } from 'vm';
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  //class Component extends React.Component {
  _handleClick() {
    alert('You just clicked a button...');
  },

  render() {
    var url = this.props.url;

    return (
      <html>
        <head>
          <title>Universal app with React</title>
          <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
          <div>
            <p>Server-side rendering...</p>
            {{ url } ? <img src={url} alt="placeholder" /> : ''}
            <br />
            <br />
            <button onClick={this._handleClick}>Click</button>
          </div>
          <script src="./bundle.js" />
        </body>
      </html>
    );
  },
});

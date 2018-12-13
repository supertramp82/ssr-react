var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  _handleClick: function() {
    alert();
  },

  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Server-side rendering...</p>
        <button onClick={this._handleClick}>Click</button>
      </div>
    );
  },
});

import React from 'react';
import ReactDOM from 'react-dom';
var Component = require('./component');

ReactDOM.hydrate(React.createElement(Component), document);

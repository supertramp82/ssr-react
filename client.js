import React from 'react';
import ReactDOM from 'react-dom';
var ClientComponent = require('./component');

ReactDOM.hydrate(React.createElement(ClientComponent), document);

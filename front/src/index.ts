import React from 'react';
import ReactDom from 'react-dom';
import App from './test';

// ReactDom.render(<App />, document.getElementById('root'));
ReactDom.render(React.createElement(App), document.getElementById('root'));

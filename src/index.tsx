import '@babel/polyfill';
import 'normalize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'whatwg-fetch';
import App from './components/App';

ReactDOM.render(
    <App/>,
    document.getElementById('app-root'),
);

if (module.hot) {
    module.hot.accept();
}

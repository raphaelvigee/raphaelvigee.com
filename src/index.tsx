import '@babel/polyfill';
import 'whatwg-fetch';
import 'normalize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app-root'));

if (module.hot) {
    module.hot.accept();
}

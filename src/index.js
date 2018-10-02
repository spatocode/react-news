import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import storeFactory from './store'
import './stylesheets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory()

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { getVirtualization } from './actions/virtualizationActions';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(getVirtualization());

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));
registerServiceWorker();

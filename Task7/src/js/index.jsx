import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import '../css/index.css';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

const { store, persistor } = configureStore();
store.runSaga(rootSaga);

document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(<Root 
        Router={BrowserRouter} 
        store={store} 
        persistor={persistor} />, document.getElementById('root'));
});

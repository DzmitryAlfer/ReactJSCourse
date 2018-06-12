import '../css/index.css'
import React from 'react'
import ReactDom from 'react-dom'
import Root from "./containers/Root";
import configureStore from "./store/configureStore";
import rootSaga from './sagas'

const {store, persistor} = configureStore();
store.runSaga(rootSaga);

document.addEventListener('DOMContentLoaded', function(){
    ReactDom.render(
        <Root store={store} persistor={persistor} history={null} routes={null}/>,
        document.getElementById('root'));
});

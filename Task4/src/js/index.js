import '../css/index.css'
import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas'
import { DocumentComponent } from './components/DocumentComponent'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga);

const action = type => store.dispatch({type})

/*
document.addEventListener('DOMContentLoaded', function(){
    console.trace('start render page');
    ReactDom.render(<DocumentComponent/>, document.getElementById('root'));
});*/

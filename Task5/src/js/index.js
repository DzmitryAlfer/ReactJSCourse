import '../css/index.css'
import React from 'react'
import ReactDom from 'react-dom'
import { DocumentComponent } from './components/DocumentComponent'

document.addEventListener('DOMContentLoaded', function(){
    console.trace('start render page');
    ReactDom.render(<DocumentComponent/>, document.getElementById('root'));
});
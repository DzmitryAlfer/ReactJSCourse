import React from 'react'
import ReactDom from 'react-dom'

const element = React.createElement('h1',{id:'idHelloWorld'}, 'Hello World');

ReactDom.render(element, document.getElementById('root'));

console.trace('run')
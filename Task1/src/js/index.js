import React from 'react'
import ReactDom from 'react-dom'
import { DocumentHeaderComponent } from './components/DocumentHeaderComponent'

//const element = React.createElement('h1',{id:'idHelloWorld'}, 'Hello World');

ReactDom.render(<DocumentHeaderComponent/>, document.getElementById('root'));

console.trace('run')
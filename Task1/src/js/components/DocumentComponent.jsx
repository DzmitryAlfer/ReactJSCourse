import React, { Component } from 'react';
import { DocumentHeaderComponent } from './DocumentHeaderComponent';

export class DocumentComponent extends Component {
    render() {
        return (<div>
                    <DocumentHeaderComponent></DocumentHeaderComponent>
                    <main id="mainBody"></main>
                </div>);
    }
}
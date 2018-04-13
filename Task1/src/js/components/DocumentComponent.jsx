import React from 'react';
import { DocumentHeaderComponent } from './DocumentHeaderComponent';

export class DocumentComponent extends React.Component {
    render() {
        return (<div>
                    <DocumentHeaderComponent></DocumentHeaderComponent>
                    <main id="mainBody"></main>
                </div>);
    }
}
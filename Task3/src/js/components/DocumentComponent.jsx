import React, { Component } from 'react';
import { DocumentHeaderComponent } from './header/DocumentHeaderComponent';

export class DocumentComponent extends Component {
    render() {
        return (<div>
                    <DocumentHeaderComponent></DocumentHeaderComponent>
                </div>);
    }
}
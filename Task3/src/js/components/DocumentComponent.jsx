import React, { Component } from 'react';
import { DocumentHeaderComponent } from './header/DocumentHeaderComponent';
import {DocumentBodyComponent} from './body/DocumentBodyComponent';

export class DocumentComponent extends Component {
    render() {
        return (<div>
                    <DocumentHeaderComponent></DocumentHeaderComponent>
                    <DocumentBodyComponent></DocumentBodyComponent>
                </div>);
    }
}
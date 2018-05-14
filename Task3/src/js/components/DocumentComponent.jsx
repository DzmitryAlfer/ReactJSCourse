import React, { Component } from 'react';
import { DocumentHeaderComponent } from './header/DocumentHeaderComponent';
import {DocumentBodyComponent} from './body/DocumentBodyComponent';

export class DocumentComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchString: "",
        };
    }

    render() {
        return (<React.Fragment>
            <DocumentHeaderComponent onSearchClick={(searchString) => {this.setState({searchString: searchString})}}></DocumentHeaderComponent>
            <DocumentBodyComponent searchString={this.state.searchString}></DocumentBodyComponent>
        </React.Fragment>);
    }
}
import React, { Component } from 'react';
import { DocumentHeaderComponent } from './header/DocumentHeaderComponent';
import {DocumentBodyComponent} from './body/DocumentBodyComponent';
import {DescriptionMovieDocHeader} from "./header/DescriptionMovieDocHeader";
import {DescriptionMovieDocBody} from "./body/DescriptionMovieDocBody";

export class DocumentComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchString: "",
            selectedItem: null,
        };

        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(movie) {
        this.setState({selectedItem: movie});
    }

    render() {
        if(!this.state.selectedItem){
            return (<React.Fragment>
                <DocumentHeaderComponent onSearchClick={(searchString) => {this.setState({searchString: searchString})}}></DocumentHeaderComponent>
                <DocumentBodyComponent searchString={this.state.searchString} onItemClick={this.onItemClick}></DocumentBodyComponent>
            </React.Fragment>);
        } else {
            return (<React.Fragment>
                <DescriptionMovieDocHeader movie={this.state.selectedItem}/>
                <DescriptionMovieDocBody movie={this.state.selectedItem}/>
            </React.Fragment>);
        }

    }
}
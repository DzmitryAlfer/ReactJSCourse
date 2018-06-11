import React, { Component } from 'react';
import {DocumentBodyComponent} from '../body/DocumentBodyComponent';
import {DescriptionMovieDocHeader} from "../header/DescriptionMovieDocHeader";
import {DescriptionMovieDocBody} from "../body/DescriptionMovieDocBody";
import DocumentHeaderContainer from '../../containers/DocumentHeaderContainer'

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
        //this.setState({selectedItem: movie}); //TODO: add navigation here
    }

    render() {
        if(!this.state.selectedItem){
            return (<React.Fragment>
                <DocumentHeaderContainer />
                <DocumentBodyComponent searchString={this.state.searchString} onItemClick={this.onItemClick}/>
            </React.Fragment>);
        } else {
            return (<React.Fragment>
                <DescriptionMovieDocHeader movie={this.state.selectedItem}/>
                <DescriptionMovieDocBody movie={this.state.selectedItem}/>
            </React.Fragment>);
        }

    }
}
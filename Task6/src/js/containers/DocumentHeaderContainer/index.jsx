import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {DocumentHeaderComponent} from "../../components/header/DocumentHeaderComponent";
import * as actions from "../../actions";

class DocumentHeaderContainer extends PureComponent {

    constructor(props, context){
        super(props, context);

        this.searchString = '';
        this.isNeedFetchData = this.props.match && this.props.match.params.hasOwnProperty('searchQuery');

        if(this.isNeedFetchData) {
            this.searchString = this.props.match.params.searchQuery;
        }
    }

    componentDidMount(){
        if(this.isNeedFetchData){
            this.props.onSearchClick(this.searchString);
        }
    }

    render() {
        return (
            <DocumentHeaderComponent initialSearchString={this.searchString} onSearchClick={(searchString) => this.props.onSearchClick(searchString)}/>);
    }
}

export default connect (
    ({ moviesReducer }) => { return {
        sortBy: moviesReducer.sortBy,
        searchBy: moviesReducer.searchBy,
    };}
    , (dispatch) => {return {onSearchClick: searchString => dispatch(actions.movies.fetchMovies(searchString))}; })
(DocumentHeaderContainer);
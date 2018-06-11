import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {DocumentHeaderComponent} from "../../components/header/DocumentHeaderComponent";
import * as actions from "../../actions";

class DocumentHeaderContainer extends PureComponent {
    render() {
        return (
            <DocumentHeaderComponent onSearchClick={(searchString) => this.props.onSearchClick(searchString)}/>);
    }
}

export default connect (
    ({ moviesReducer }) => { return {
        sortBy: moviesReducer.sortBy,
        searchBy: moviesReducer.searchBy,
    };}
    , (dispatch) => {return {onSearchClick: searchString => dispatch(actions.movies.fetchMovies(searchString))}; })
(DocumentHeaderContainer);
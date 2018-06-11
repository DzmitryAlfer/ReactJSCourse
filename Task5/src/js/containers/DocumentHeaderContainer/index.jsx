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

export default connect (() => {return {};}, (dispatch) => {return {onSearchClick: searchString => dispatch(actions.movies.searchMovies(searchString))}; })(DocumentHeaderContainer);
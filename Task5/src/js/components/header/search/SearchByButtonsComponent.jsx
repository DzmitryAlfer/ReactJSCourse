import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sortMovies} from "../../../selectors";
import * as actions from "../../../actions";

export const SearchByButtonsComponentStates = Object.freeze({
    TITLE: 'title',
    DIRECTOR: 'director',
});

class SearchByButtonsComponent extends PureComponent {
    render() {
        return (
            <div className="search-by-control_item">
                <span className="header-text">SEARCH BY</span>
                <button className={`header-text search-by-control_button${this.props.searchBy === SearchByButtonsComponentStates.TITLE
                    ? ' search-by-control_button--selected' : ''}`} onClick={() => this.props.onSearchBy(SearchByButtonsComponentStates.TITLE)}>TITLE</button>
                <button className={`header-text search-by-control_button${this.props.searchBy === SearchByButtonsComponentStates.DIRECTOR
                    ? ' search-by-control_button--selected' : ''}`} onClick={() => this.props.onSearchBy(SearchByButtonsComponentStates.DIRECTOR)}>DIRECTOR</button>
            </div>
        );
    }
}

SearchByButtonsComponent.propTypes = {
    onSearchBy: PropTypes.func,
};

const mapStateToProps = state => {
    const { moviesReducer } = state;

    return {
        searchBy : moviesReducer.searchBy,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchBy : searchBy => dispatch(actions.movies.searchByMovies(searchBy)),
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(SearchByButtonsComponent);
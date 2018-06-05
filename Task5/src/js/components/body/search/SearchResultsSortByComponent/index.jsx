import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as actions from "../../../../actions";

export const SearchResultsSortByComponentState = Object.freeze({
    RELEASE_DATE: 'release-date',
    RATING: 'rating',
});

class SearchResultsSortByComponent extends PureComponent {
    render() {
        return (
            <div className="search-info_item">
                <span className="search-info_text">Sort by</span>
                <button className={`release sort-by_button${this.props.sortBy === SearchResultsSortByComponentState.RELEASE_DATE ? ' sort-by_button--selected' : ''}`} onClick={() => this.props.onSortBy(SearchResultsSortByComponentState.RELEASE_DATE)}>release date</button>
                <button className={`rating sort-by_button${this.props.sortBy === SearchResultsSortByComponentState.RATING ? ' sort-by_button--selected' : ''}`} onClick={() => this.props.onSortBy(SearchResultsSortByComponentState.RATING)}>rating</button>
          </div>);
    }
}

SearchResultsSortByComponent.propTypes = {
    onSortBy: PropTypes.func,
};

const mapStateToProps = state => {
    const { moviesReducer } = state;

    return {
        sortBy : moviesReducer.sortBy,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSortBy : sortBy => dispatch(actions.movies.sortMovies(sortBy)),
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(SearchResultsSortByComponent);
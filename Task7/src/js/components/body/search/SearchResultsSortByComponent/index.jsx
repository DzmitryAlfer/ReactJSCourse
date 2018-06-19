import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as actions from "../../../../actions";
import {SortBy} from "../../../../common";


class SearchResultsSortByComponent extends PureComponent {
    render() {
        return (
            <div className="search-info_item">
                <span className="search-info_text">Sort by</span>
                <button className={`release sort-by_button${this.props.sortBy === SortBy.RELEASE_DATE ? ' sort-by_button--selected' : ''}`} onClick={() => this.props.onSortBy(SortBy.RELEASE_DATE)}>release date</button>
                <button className={`rating sort-by_button${this.props.sortBy === SortBy.RATING ? ' sort-by_button--selected' : ''}`} onClick={() => this.props.onSortBy(SortBy.RATING)}>rating</button>
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
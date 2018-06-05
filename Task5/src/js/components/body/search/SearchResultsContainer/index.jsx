import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../actions/index'
import { SearchResultsComponent } from '../SearchResultsComponent/index';
import {SearchResultsSortByComponentState} from "../SearchResultsSortByComponent/index";
import {sortMovies} from "../../../../selectors";

class SearchResultsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.onSortBy = this.onSortBy.bind(this);
    }

    onSortBy(sortBy = SearchResultsSortByComponentState.RELEASE_DATE) {
        this.props.dispatch(actions.movies.sortMovies(sortBy));
    }

    render() {
        const { filteredResults, numberOfMovies } = this.props;
        return <SearchResultsComponent movies={filteredResults} numberOfMovies={numberOfMovies} onSortBy={this.onSortBy}/>;

        /*const filteredResults = this.state.searchResults.data.filter((movie) => !this.props.searchString || this.props.searchString === "" ? true : movie.title.toLowerCase() === this.props.searchString.toLowerCase());

        return <SearchResultsComponent movies={filteredResults} numberOfMovies={this.state.searchResults.total} onItemClick={this.props.onItemClick} onSortBy={this.onSortBy}/>;*/
    }
};

const mapStateToProps = (state) => {
    const { moviesReducer } = state;

    return {
        filteredResults : sortMovies(moviesReducer),
        numberOfMovies: moviesReducer.total,
    }
};

export default connect (mapStateToProps)(SearchResultsContainer);
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../actions/index'
import { SearchResultsComponent } from '../SearchResultsComponent/index';
import {SearchResultsSortByComponentState} from "../SearchResultsSortByComponent/index";
import {sortMovies} from "../../../../selectors";

class SearchResultsContainer extends PureComponent {
    constructor(props) {
        super(props);
        /*this.state = {
            searchResults: { data: [], total: 0 },
            sortBy : SearchResultsSortByComponentState.RELEASE_DATE
        };*/

        this.onSortBy = this.onSortBy.bind(this);
    }

    onSortBy(sortBy = SearchResultsSortByComponentState.RELEASE_DATE) {
        this.props.dispatch(actions.movies.sortMovies(sortBy));
        //this.setState({sortBy: sortBy});
    }

    componentDidMount() {
        /*MoviesDataSource.getMovies().then((searchResults) => {
            this.setState({ searchResults });
        });*/
    }

    render() {
        const { filteredResults } = this.props;
        return <SearchResultsComponent movies={filteredResults} numberOfMovies={2} onSortBy={this.onSortBy}/>;

        /*const filteredResults = this.state.searchResults.data.filter((movie) => !this.props.searchString || this.props.searchString === "" ? true : movie.title.toLowerCase() === this.props.searchString.toLowerCase());

        if (this.state.sortBy === SearchResultsSortByComponentState.RELEASE_DATE) {
            filteredResults.sort((a,b) => {
                return (a.release_date > b.release_date)
                    ? 1 : (a.release_date > b.release_date) ? -1 : 0;
            });
        } else {
            filteredResults.sort((a,b) => {
                return (a.vote_average > b.vote_average)
                    ? 1 : (a.vote_average > b.vote_average) ? -1 : 0;
            });
        }

        return <SearchResultsComponent movies={filteredResults} numberOfMovies={this.state.searchResults.total} onItemClick={this.props.onItemClick} onSortBy={this.onSortBy}/>;*/
    }
};

/*function sortMovies(movies, sortBy){
    if (sortBy === SearchResultsSortByComponentState.RELEASE_DATE) {
        movies.sort((a,b) => {
            return (a.release_date > b.release_date)
                ? 1 : (a.release_date > b.release_date) ? -1 : 0;
        });
    } else {
        movies.sort((a,b) => {
            return (a.vote_count > b.vote_count)
                ? 1 : (a.vote_count > b.vote_count) ? -1 : 0;
        });
    }

    return movies;
}*/

const mapStateToProps = (state) => {
    const { moviesReducer } = state;

    return {
        filteredResults : sortMovies(moviesReducer)
    }
};

export default connect (mapStateToProps)(SearchResultsContainer);
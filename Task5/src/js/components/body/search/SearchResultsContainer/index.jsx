import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { MoviesDataSource } from '../../../../services/api/MoviesDataSource/index';
import { SearchResultsComponent } from '../SearchResultsComponent/index';
import {SearchResultsSortByComponentState} from "../SearchResultsSortByComponent/index";

class SearchResultsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: { data: [], total: 0 },
            sortBy : SearchResultsSortByComponentState.RELEASE_DATE
        };

        this.onSortBy = this.onSortBy.bind(this);
    }

    onSortBy(sortBy = SearchResultsSortByComponentState.RELEASE_DATE) {
        this.setState({sortBy: sortBy});
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

function mapStateToProps(state) {
    const { moviesReducer } = state;

    return {
        filteredResults : moviesReducer.data
    }
}

export default connect (mapStateToProps)(SearchResultsContainer);
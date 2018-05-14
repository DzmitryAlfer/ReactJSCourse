import React, { PureComponent } from 'react';
import { MoviesDataSource } from '../../../services/api/MoviesDataSource';
import { SearchResultsComponent } from './SearchResultsComponent';

export class SearchResultsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { searchResults: { data: [], total: 0 } };
    }

    componentDidMount() {
        MoviesDataSource.getMovies().then((searchResults) => {
            this.setState({ searchResults });
        });
    }

    render() {
        const filteredResults = this.state.searchResults.data.filter((movie) => !this.props.searchString || this.props.searchString === "" ? true : movie.title.toLowerCase() === this.props.searchString.toLowerCase());
        return <SearchResultsComponent movies={filteredResults} numberOfMovies={this.state.searchResults.total} onItemClick={this.props.onItemClick}/>;
    }
};
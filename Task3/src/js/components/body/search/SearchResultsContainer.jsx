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
        return <SearchResultsComponent movies={this.state.searchResults.data} numberOfMovies={this.state.searchResults.total}/>;
    }
}

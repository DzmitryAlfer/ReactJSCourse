import React, {PureComponent} from 'react'
import { MoviesDataSource } from '../../../services/api/MoviesDataSource';
import { SearchResultsComponent } from './SearchResultsComponent';

export class SearchResultsContainer extends PureComponent {
    constructor(props){
        super(props);
        this.state = {searchResults: []};
    }

    componentDidMount() {
        MoviesDataSource.getMovies().then((searchResults) => {
            this.setState({searchResults: searchResults});
        });
    }

    render() {
        return (<SearchResultsComponent movies={this.state.searchResults.data}/>);
    }
}
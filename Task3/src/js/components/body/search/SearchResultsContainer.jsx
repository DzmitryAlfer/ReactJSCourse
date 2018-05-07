import React, {PureComponent} from 'react'
import {MoviesDataSource} from '../../../services/api/MoviesDataSource';
import {SearchResultsComponent} from './SearchResultsComponent';

export class SearchResultsContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {movies: []};
    }

    componentDidMount() {
        MoviesDataSource.getMovies().then((movies) => {
            this.setState({movies: movies});
        });
    }

    render() {
        return (<SearchResultsComponent movies={this.state.movies}/>);
    }
}
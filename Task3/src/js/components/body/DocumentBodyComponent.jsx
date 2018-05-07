import React, { PureComponent } from 'react';
import {MoviesDataSource} from '../../services/api/MoviesDataSource';

export class DocumentBodyComponent extends PureComponent {

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
        return this.state.movies.map(m => <h1>{m.title}</h1>);
    }
}
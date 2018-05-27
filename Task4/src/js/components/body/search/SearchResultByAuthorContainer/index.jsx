import React, {PureComponent} from 'react';
import {MoviesDataSource} from "../../../../services/api/MoviesDataSource/index";
import {MovieList} from "../MovieList";

export class SearchResultByAuthorContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            searchResults: { data: [], total: 0 },
        };
    }

    componentDidMount() {
        MoviesDataSource.getMoviesByAuthor(this.props.author).then((searchResults) => {
            this.setState({searchResults});
        });
    }

    render() {
        return (<div className='search-results'>
                <MovieList movies={this.state.searchResults.data}/>
            </div>
        );
    }
}
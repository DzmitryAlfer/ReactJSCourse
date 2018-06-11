import React, {PureComponent} from 'react';
import * as actions from "../../../../actions";
import {MovieList} from "../MovieList";
import {connect} from "react-redux";

class SearchResultByGenreContainer extends PureComponent {

    componentDidMount() {
        this.props.dispatch(actions.movies.fetchRelatedMovies(this.props.movie))
    }

    render() {
        return (<div className='search-results'>
                <MovieList movies={this.props.relatedMovies}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { movieReducer } = state;

    return {
        movie : movieReducer.movie,
        relatedMovies: movieReducer.relatedMovies
    }
};

export default connect (mapStateToProps)(SearchResultByGenreContainer);
import React, {PureComponent} from 'react';
import * as actions from "../../../../actions";
import {MovieList} from "../MovieList";
import {connect} from "react-redux";

class SearchResultByGenreContainer extends PureComponent {

    componentDidMount() {
        if(this.props.movie){
            this.props.dispatch(actions.movies.fetchRelatedMovies(this.props.movie.genres));
        }
    }

    render() {
        return (<div className='search-results'>
                <MovieList movies={this.props.relatedMovies.data}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { movieReducer } = state;

    return {
        movie : ownProps.movie,
        relatedMovies: movieReducer.relatedMovies
    }
};

export default connect (mapStateToProps)(SearchResultByGenreContainer);
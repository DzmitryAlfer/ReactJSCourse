import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MoviePropType } from '../../../../ProjectPropTypes/MoviePropType';
import { SearchInfoComponent } from '../SearchInfoComponent';
import {MovieList} from "../MovieList";

export class SearchResultsComponent extends PureComponent {
    render() {
        const { movies, numberOfMovies } = this.props;

        if (movies && movies.length > 0) {
            return (
              <div className="search-results">
                  <SearchInfoComponent numberOfItems={numberOfMovies} />
                  <MovieList movies={movies} onItemClick={this.props.onItemClick}/>
                </div>);
        }

        return (<div className='no-films-found'>No films found</div>);
    }
}

SearchResultsComponent.defaultProps = {
    movies: [],
    numberOfMovies: -1,
    onItemClick: () => {},
};

SearchResultsComponent.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(MoviePropType)),
    numberOfMovies: PropTypes.number,
    onItemClick: PropTypes.func,
};

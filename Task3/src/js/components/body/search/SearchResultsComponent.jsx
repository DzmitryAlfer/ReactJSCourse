import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SearchResultItemComponent } from './SearchResultItemComponent';
import { MoviePropType } from '../../../ProjectPropTypes/MoviePropType';
import { SearchInfoComponent } from './SearchInfoComponent';

export class SearchResultsComponent extends PureComponent {
    render() {
        const { movies, numberOfMovies } = this.props;

        if (movies && movies.length > 0) {
            return (
              <div className="search-results">
                  <SearchInfoComponent numberOfItems={numberOfMovies} />
                  {movies.map(movie => <SearchResultItemComponent key={movie.id} movie={movie} />)}
                </div>);
        }

        return (<div>No films found</div>);
    }
}

SearchResultsComponent.defaultProps = {
    movies: [],
    numberOfMovies: 0,
};

SearchResultsComponent.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(MoviePropType)),
    numberOfMovies: PropTypes.number,
};

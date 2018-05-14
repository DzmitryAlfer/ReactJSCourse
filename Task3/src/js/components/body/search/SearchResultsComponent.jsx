import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SearchResultItemComponent } from './SearchResultItemComponent';
import { MoviePropType } from '../../../ProjectPropTypes/MoviePropType';
import { SearchInfoComponent } from './SearchInfoComponent';

export class SearchResultsComponent extends PureComponent {

    constructor(props){
        super(props);

    }



    render() {
        const { movies, numberOfMovies } = this.props;

        if (movies && movies.length > 0) {
            return (
              <div className="search-results">
                  <SearchInfoComponent numberOfItems={numberOfMovies} />
                  {movies.map(movie => <SearchResultItemComponent key={movie.id} movie={movie} onItemClick={() => {this.props.onItemClick(movie);}} />)}
                </div>);
        }

        return (<div>No films found</div>);
    }
}

SearchResultsComponent.defaultProps = {
    movies: [],
    numberOfMovies: 0,
    onItemClick: () => {},
};

SearchResultsComponent.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(MoviePropType)),
    numberOfMovies: PropTypes.number,
    onItemClick: PropTypes.func,
};

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SearchResultItemComponent } from '../SearchResultItemComponent/index';
import { MoviePropType } from '../../../../ProjectPropTypes/MoviePropType';
import { SearchInfoComponent } from '../SearchInfoComponent/index';
import {MovieList} from "../MovieList/index";

export class SearchResultsComponent extends PureComponent {

    constructor(props){
        super(props);
    }

    render() {
        const { movies, numberOfMovies } = this.props;

        if (movies && movies.length > 0) {
            return (
              <div className="search-results">
                  <SearchInfoComponent numberOfItems={numberOfMovies} onSortBy={this.props.onSortBy} />
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

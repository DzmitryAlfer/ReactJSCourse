import React from 'react';
import PropTypes from 'prop-types';
import {SearchResultItemComponent} from './SearchResultItemComponent';
import {MoviePropType} from '../../../ProjectPropTypes/MoviePropType';

export const SearchResultsComponent = ({movies}) => (
    <div className="search-results">
        {
            movies && movies.length > 0
                ? movies.map((movie) => <SearchResultItemComponent movie={movie}/>)
                : (<div>No films found</div>)
        }
    </div>
);


SearchResultsComponent.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(MoviePropType))
};

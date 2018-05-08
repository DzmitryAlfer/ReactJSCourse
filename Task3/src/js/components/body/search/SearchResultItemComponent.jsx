import React from 'react';
import PropTypes from 'prop-types';
import {MoviePropType} from '../../../ProjectPropTypes/MoviePropType';

export const SearchResultItemComponent = ({movie}) => (
    <div className="search-result_item">
        <img className="search-result-image" src={movie.poster_path}></img>
        <div className="search-result-description">
            <div className="movie-title-and-year">
                <span>Guardians of the Galaxy Vol. 3</span>
                <span className="movie-year">2020</span>
            </div>
            <div className="movie-genres">
                <span className="movie-genres_item">Action</span>
                <span className="movie-genres_item">Adventure</span>
                <span className="movie-genres_item">Science Fiction</span>
            </div>
        </div>
    </div>
);

SearchResultItemComponent.propTypes = {
  movie: PropTypes.shape(MoviePropType)
};
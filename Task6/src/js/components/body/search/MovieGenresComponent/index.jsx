import React from 'react';
import PropTypes from 'prop-types';

export const MovieGenresComponent = ({genres}) => (
    <div className="movie-genres">
        {genres.map((genre) => <span key={genre} className="movie-genres_item">{genre}</span>)}
    </div>
);

MovieGenresComponent.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string),
};
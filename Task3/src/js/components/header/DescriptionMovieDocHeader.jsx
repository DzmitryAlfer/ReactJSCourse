import React from 'react';
import PropTypes from "prop-types";
import {MoviePropType} from "../../ProjectPropTypes/MoviePropType";

export const DescriptionMovieDocHeader = ({movie}) => (
    <div className='description-movie-doc-header'>
        <img src={movie.poster_path}/>
        <div>
            <div>
                <span>{movie.title}</span>
            </div>
        </div>
    </div>
);

DescriptionMovieDocHeader.propTypes = {
    movie: PropTypes.shape(MoviePropType),
};
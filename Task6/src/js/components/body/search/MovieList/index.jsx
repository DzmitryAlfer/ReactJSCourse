import React from 'react';
import PropTypes from "prop-types";
import {SearchResultItemComponent} from "../SearchResultItemComponent/index";
import {MoviePropType} from "../../../../ProjectPropTypes/MoviePropType";

export const MovieList = ({movies, onItemClick}) => {
    if(!movies || movies.length === 0)
        return null;

    return movies.map(movie => <SearchResultItemComponent key={movie.id} movie={movie} onItemClick={() => {onItemClick(movie);}} />)
};

MovieList.defaultProps = {
    movies: [],
    onItemClick: () => {},
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(MoviePropType)),
    onItemClick: PropTypes.func,
};
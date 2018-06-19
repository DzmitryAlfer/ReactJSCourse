import React from 'react';
import PropTypes from 'prop-types';
import {MovieTitleAndYearComponent} from "./MovieTitleAndYearComponent";
import {MovieGenresComponent} from "./MovieGenresComponent";

export const SearchResultDescriptionComponent = ({title, year, genres, rating}) => (
    <div className="search-result-description">
        <MovieTitleAndYearComponent title={title} year={year} rating={rating}/>
        <MovieGenresComponent genres={genres}/>
    </div>
);

SearchResultDescriptionComponent.defaultProps = {
    title: 'Empty title',
    year: 0,
    rating:0,
};

SearchResultDescriptionComponent.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number.isRequired
};
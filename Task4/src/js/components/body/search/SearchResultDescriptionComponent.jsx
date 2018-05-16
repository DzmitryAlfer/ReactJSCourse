import React from 'react';
import PropTypes from 'prop-types';
import {MovieTitleAndYearComponent} from "./MovieTitleAndYearComponent";
import {MovieGenresComponent} from "./MovieGenresComponent";

export const SearchResultDescriptionComponent = ({title, year, genres}) => (
    <div className="search-result-description">
        <MovieTitleAndYearComponent title={title} year={year}/>
        <MovieGenresComponent genres={genres}/>
    </div>
);

SearchResultDescriptionComponent.defaultProps = {
    title: 'Empty title',
    year: 0,
};

SearchResultDescriptionComponent.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
};
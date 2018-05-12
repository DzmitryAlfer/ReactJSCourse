import React from 'react';
import PropTypes from 'prop-types';

export const MovieTitleAndYearComponent = ({title, year}) => (
    <div className="movie-title-and-year">
        <span>{title}</span>
        <span className="movie-year">{year}</span>
    </div>
);

MovieTitleAndYearComponent.defaultProps = {
    title: 'Empty title',
    year: 0,
};

MovieTitleAndYearComponent.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
};
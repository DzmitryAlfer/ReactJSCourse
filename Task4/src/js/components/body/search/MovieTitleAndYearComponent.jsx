import React from 'react';
import PropTypes from 'prop-types';
import {TextComponent} from "../../common/TextComponent/TextComponent";

export const MovieTitleAndYearComponent = ({title, year}) => (
    <div className="movie-title-and-year">
        <TextComponent text={title}/>
        <TextComponent text={year.toString()} className='movie-year'/>
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
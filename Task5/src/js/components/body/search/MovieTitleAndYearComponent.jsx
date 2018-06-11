import React from 'react';
import PropTypes from 'prop-types';
import {TextComponent} from "../../common/TextComponent";

export const MovieTitleAndYearComponent = ({title, year, rating}) => (
    <div className="movie-title-and-year">
        <TextComponent text={title}/>
        <TextComponent text={year.toString()} className='movie-year'/>
        <div>
            <TextComponent text={`Rating: ${rating}`} />
        </div>
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
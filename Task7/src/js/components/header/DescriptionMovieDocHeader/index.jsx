import React from 'react';
import PropTypes from "prop-types";
import {MoviePropType} from "../../../ProjectPropTypes/MoviePropType";
import {LinkMovieButton} from "../../common/MovieButton";
import {MovieDescriptionHeader} from "../MovieDescriptionHeader";

export const DescriptionMovieDocHeader = ({movie}) => (
    <header className="document-header">
        <LinkMovieButton text='Search'
                     containerClass='document-header-description__search-button'/>

        <MovieDescriptionHeader movie={movie}/>
    </header>
);

DescriptionMovieDocHeader.propTypes = {
    movie: PropTypes.shape(MoviePropType),
};
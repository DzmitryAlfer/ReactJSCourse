import React from 'react';
import PropTypes from "prop-types";
import {MoviePropType} from "../../ProjectPropTypes/MoviePropType";
import {MovieButton} from "../common/MovieButton";
import {MovieDescriptionHeader} from "./description/MovieDescriptionHeader";

export const DescriptionMovieDocHeader = ({movie}) => (
    <header className="document-header">
        <MovieButton text='Search' onButtonClick={() => {window.location.reload(true);}}
                     containerClass='document-header-description__search-button'/>

        <MovieDescriptionHeader movie={movie}/>
    </header>
);

DescriptionMovieDocHeader.propTypes = {
    movie: PropTypes.shape(MoviePropType),
};
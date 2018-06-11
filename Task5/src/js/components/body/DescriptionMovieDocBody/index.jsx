import React from 'react';
import {TextInContainerComponent} from "../../common/TextInContainerComponent";
import PropTypes from "prop-types";
import {MoviePropType} from "../../../ProjectPropTypes/MoviePropType";
import SearchResultByAuthorContainer from "../search/SearchResultByAuthorContainer";

export const DescriptionMovieDocBody = ({movie}) => (
    <main className="main-body">
        <TextInContainerComponent text={`Films by ${movie.tagline}`}/>
        <SearchResultByAuthorContainer author={movie.tagline}/>
    </main>
);

DescriptionMovieDocBody.propTypes = {
    movie: PropTypes.shape(MoviePropType),
};
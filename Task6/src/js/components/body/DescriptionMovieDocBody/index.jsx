import React from 'react';
import {TextInContainerComponent} from "../../common/TextInContainerComponent";
import PropTypes from "prop-types";
import {MoviePropType} from "../../../ProjectPropTypes/MoviePropType";
import SearchResultByGenreContainer from "../search/SearchResultByGenreContainer";

export const DescriptionMovieDocBody = ({movie}) => (
    <main className="main-body">
        <TextInContainerComponent text={`Genres: ${movie.genres.map(g => ` ${g}`)}`}/>
        <SearchResultByGenreContainer movie={movie}/>
    </main>
);

DescriptionMovieDocBody.propTypes = {
    movie: PropTypes.shape(MoviePropType),
};
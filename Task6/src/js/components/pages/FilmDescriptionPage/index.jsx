import React from 'react';
import FilmDescriptionContainer from '../../../containers/FilmDescriptionContainer'

export const FilmDescriptionPage = (props) => {
    return (
        <FilmDescriptionContainer movieId={props.match.params.movieId}/>
    );
};
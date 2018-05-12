import React from 'react';
import PropTypes from 'prop-types';
import {MoviePropType} from '../../../ProjectPropTypes/MoviePropType';
import {SearchResultDescriptionComponent} from "./SearchResultDescriptionComponent";

export const SearchResultItemComponent = ({movie, onItemClick}) => (
    <div className="search-result_item">
        <button onClick={() => onItemClick(movie.id)}>
            <img className="search-result-image" src={movie.poster_path}/>
        </button>
        <SearchResultDescriptionComponent title={movie.title} year={movie.year}
                                          genres={movie.genres}/>
    </div>
);

SearchResultItemComponent.propTypes = {
    movie: PropTypes.shape(MoviePropType),
    onItemClick: PropTypes.func,
};
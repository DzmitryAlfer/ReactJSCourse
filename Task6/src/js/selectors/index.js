import { createSelector } from 'reselect'
import {SortBy} from "../common";

const getMovies = (state) => state.data;
const getSortBy = (state) => state.sortBy;

export const sortMovies = createSelector(
    [ getMovies, getSortBy],
    (movies, sortBy) => {

        if(!movies || !sortBy) {
            return movies
        }

        switch (sortBy) {
            case SortBy.RATING:
                movies = movies.sort((a,b) => {
                    return (a.vote_average > b.vote_average)
                        ? -1 : (a.vote_average < b.vote_average) ? 1 : 0;
                });
                break;

            default:
                movies = movies.sort((a,b) => {
                    return (a.release_date > b.release_date)
                        ? -1 : (a.release_date < b.release_date) ? 1 : 0;
                });
                break;
        }

        return [...movies];
    }
);
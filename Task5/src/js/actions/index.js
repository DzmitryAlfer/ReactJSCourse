export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_RELATED_MOVIES = 'RECEIVE_RELATED_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_RELATED_MOVIES = 'FETCH_RELATED_MOVIES';
export const SORT_MOVIES = 'SORT_MOVIES';
export const SEARCH_BY_MOVIES = 'SEARCH_BY_MOVIES';

export const SET_ERROR = 'SET_ERROR';


function action(type, payload = {}) {
    return {type, ...payload}
}

export const app = {
    setError: (hasError) => action(SET_ERROR, hasError)
};

export const movies = {
    fetchMovies: () => action(FETCH_MOVIES),
    fetchRelatedMovies: (movie) => action(FETCH_RELATED_MOVIES, {movie}),
    receiveMovies: movies => action(RECEIVE_MOVIES, {movies}),
    receiveRelatedMovies: (movies) => action(RECEIVE_RELATED_MOVIES, {movies}),
    sortMovies: sortBy => action(SORT_MOVIES, {sortBy}),
    searchByMovies: searchBy => action(SEARCH_BY_MOVIES, {searchBy})
};
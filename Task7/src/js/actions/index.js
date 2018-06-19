export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_RELATED_MOVIES = 'RECEIVE_RELATED_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_RELATED_MOVIES = 'FETCH_RELATED_MOVIES';
export const SORT_MOVIES = 'SORT_MOVIES';
export const SEARCH_BY_MOVIES = 'SEARCH_BY_MOVIES';

export const SET_ERROR = 'SET_ERROR';


function action(type, payload = {}) {
    return { type, ...payload };
}

export const app = {
    setError: hasError => action(SET_ERROR, { hasError }),
};

export const movies = {
    fetchMovies: searchQuery => action(FETCH_MOVIES, { searchQuery }),
    fetchRelatedMovies: genres => action(FETCH_RELATED_MOVIES, { genres }),
    fetchMovie: movieId => action(FETCH_MOVIE, { movieId }),
    receiveMovies: movies => action(RECEIVE_MOVIES, { movies }),
    receiveMovie: movie => action(RECEIVE_MOVIE, { movie }),
    receiveRelatedMovies: movies => action(RECEIVE_RELATED_MOVIES, { movies }),
    sortMovies: sortBy => action(SORT_MOVIES, { sortBy }),
    searchByMovies: searchBy => action(SEARCH_BY_MOVIES, { searchBy }),
};

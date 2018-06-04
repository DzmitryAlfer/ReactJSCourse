export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';


function action(type, payload = {}) {
    return {type, ...payload}
}

export const movies = {
    fetchMovies: () => action(FETCH_MOVIES),
    receiveMovies: movies => action(RECEIVE_MOVIES, {movies})
};
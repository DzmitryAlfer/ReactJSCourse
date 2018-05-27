import MoviesDataSource2 from './__mocks__/index'

export const MoviesDataSource = {
    getMovies() {
        return MoviesDataSource2.getMovies();

        const url = 'http://react-cdp-api.herokuapp.com/movies';
        return fetch(url).then((resp) => resp.json());
    },

    getMoviesByAuthor({author}) {
        return MoviesDataSource2.getMovies();
        const url = 'http://react-cdp-api.herokuapp.com/movies';
        return fetch(url).then((resp) => resp.json());
    },
};
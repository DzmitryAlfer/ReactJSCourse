export const MoviesDataSource = {
    getMovies() {
        const url = 'http://react-cdp-api.herokuapp.com/movies';
        return fetch(url).then((resp) => resp.json());
    }
};
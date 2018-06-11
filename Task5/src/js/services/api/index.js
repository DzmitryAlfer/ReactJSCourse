import {SortBy, SortOrder} from "../../common";

const initialQueryParameters = {
    sortBy: SortBy.RELEASE_DATE,
    sortOrder: SortOrder.DESC,
};

export const api = {
    getMovies(queryParameters = initialQueryParameters) {
        //return MoviesDataSource2.getMovies();

        /*const url = 'http://react-cdp-api.herokuapp.com/movies';
        return fetch(url).then((resp) => resp.json());*/

        const url = new URL("http://react-cdp-api.herokuapp.com/movies");
        const params = queryParameters;

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        return fetch(url.toString()).then((resp) => resp.json());
    },

    getMoviesByAuthor({author}) {
        //return MoviesDataSource2.getMovies();
        const url = 'http://react-cdp-api.herokuapp.com/movies';
        return fetch(url).then((resp) => resp.json());
    },
};
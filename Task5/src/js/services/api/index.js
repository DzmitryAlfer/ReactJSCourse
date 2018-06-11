import {SortBy, SortOrder} from "../../common";

const initialQueryParameters = {
    search: null,
    sortBy: SortBy.RELEASE_DATE,
    sortOrder: SortOrder.DESC,
};

export const api = {
    getMovies(queryParameters = initialQueryParameters) {
        const url = new URL("http://react-cdp-api.herokuapp.com/movies");
        const params = queryParameters;

        Object.keys(params).forEach((key) => {
            const val = params[key];
            if(val) {
                url.searchParams.append(key, val)
            }
        });

        const strUrl = url.toString();

        console.log(`make GET request: ${strUrl}`);

        return fetch(strUrl).then((resp) => resp.json());
    },

    getMoviesByAuthor({author}) {
        //return MoviesDataSource2.getMovies();
        const url = 'http://react-cdp-api.herokuapp.com/movies';
        return fetch(url).then((resp) => resp.json());
    },
};
import {SearchBy, SortBy, SortOrder} from "../../common";

const initialQueryParameters = {
    searchBy: SearchBy.TITLE,
    sortBy: SortBy.RELEASE_DATE,
    sortOrder: SortOrder.DESC,
};

export const api = {
    getMovies(queryParameters) {
        const url = new URL("http://react-cdp-api.herokuapp.com/movies");
        const params = queryParameters ? {...initialQueryParameters, ...queryParameters} : initialQueryParameters;

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
    getMovie({movieId}){
        return fetch(`http://react-cdp-api.herokuapp.com/movies/${movieId}`).then((resp) => resp.json());
    },
};
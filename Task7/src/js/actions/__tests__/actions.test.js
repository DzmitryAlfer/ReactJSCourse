import * as actions from "../";
import {SearchBy, SortBy} from "../../common";

describe('actions', () => {
    test('app.setError', ()=> {
        const action = actions.app.setError(true);
        expect(action).toMatchSnapshot();
    });

    test('movies.fetchMovies', ()=> {
        const action = actions.movies.fetchMovies('query');
        expect(action).toMatchSnapshot();
    });

    test('movies.fetchRelatedMovies', ()=> {
        const action = actions.movies.fetchRelatedMovies({id:1});
        expect(action).toMatchSnapshot();
    });

    test('movies.receiveMovies', ()=> {
        const action = actions.movies.receiveMovies([{id:1}, {id:2}]);
        expect(action).toMatchSnapshot();
    });

    test('movies.receiveRelatedMovies', ()=> {
        const action = actions.movies.receiveRelatedMovies([{id:1}, {id:2}]);
        expect(action).toMatchSnapshot();
    });

    test('movies.sortMovies', ()=> {
        const action = actions.movies.sortMovies(SortBy.RATING);
        expect(action).toMatchSnapshot();
    });

    test('movies.searchByMovies', ()=> {
        const action = actions.movies.searchByMovies(SearchBy.GENRES);
        expect(action).toMatchSnapshot();
    });
});
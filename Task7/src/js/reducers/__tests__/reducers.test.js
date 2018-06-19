import { appReducer, movieReducer, moviesReducer } from '../';
import * as actions from '../../actions';
import { SearchBy, SortBy } from '../../common';

describe('reducers', () => {
    test('appReducer.setError', () => {
        expect(appReducer(null, actions.app.setError(true))).toEqual({ hasError: true });
    });

    test('appReducer.SOME_TYPE', () => {
        expect(appReducer({}, { type: 'SOME_TYPE' })).toEqual({});
    });

    test('movieReducer.SOME_TYPE', () => {
        expect(movieReducer({}, { type: 'SOME_TYPE' })).toEqual({});
    });

    test('movieReducer.receiveRelatedMovies', () => {
        expect(movieReducer(null, actions.movies.receiveRelatedMovies([{ id: 1 }, { id: 2 }])))
            .toEqual({ relatedMovies: [{ id: 1 }, { id: 2 }] });
    });

    test('moviesReducer.SOME_TYPE', () => {
        expect(moviesReducer({}, { type: 'SOME_TYPE' })).toEqual({});
    });

    test('moviesReducer.receiveMovies', () => {
        expect(moviesReducer(null, actions.movies.receiveMovies({ movies: [{ id: 1 }, { id: 2 }] })))
            .toEqual({ movies: [{ id: 1 }, { id: 2 }] });
    });

    test('moviesReducer.sortMovies', () => {
        expect(moviesReducer(null, actions.movies.sortMovies(SortBy.RATING)))
            .toEqual({ sortBy: SortBy.RATING });
    });

    test('moviesReducer.searchByMovies', () => {
        expect(moviesReducer(null, actions.movies.searchByMovies(SearchBy.GENRES)))
            .toEqual({ searchBy: SearchBy.GENRES });
    });
});

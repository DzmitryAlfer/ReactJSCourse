import { call, put, takeEvery, fork, all, select } from 'redux-saga/effects'
import * as actions from '../actions'
import {api} from "../services/api";
import {getSearchBy, getSortBy} from './selectors'
import {SearchBy} from '../common'

export function* fetchMovies(params = {searchQuery: null}) {
    const sortBy = yield select(getSortBy);
    const searchBy = yield select(getSearchBy);
    const search = params.searchQuery;

    const movies = yield call(api.getMovies, {sortBy, searchBy, search});
    yield put(actions.movies.receiveMovies(movies));
}

export function* fetchRelatedMovies(params = {genres: null}) {
    const {genres} = params;

    if(!genres || genres.length === 0){
        return fetchMovies();
    }
    const sortBy = yield select(getSortBy);

    const genre = genres[0];

    const movies = yield call(api.getMovies, {sortBy, searchBy: SearchBy.GENRES, search: genre});
    yield put(actions.movies.receiveRelatedMovies(movies));
}

export function* fetchMovie(params = {movieId: null}) {
    const {movieId} = params;

    if(!movieId){
        return null;
    }

    const movie = yield call(api.getMovie, {movieId: movieId});
    yield put(actions.movies.receiveMovie(movie));

}

/* istanbul ignore next */
export function* watchFetchMovie() {
    yield takeEvery(actions.FETCH_MOVIE, fetchMovie);
}

/* istanbul ignore next */
export function* watchFetchMovies() {
    yield takeEvery(actions.FETCH_MOVIES, fetchMovies);
}

/* istanbul ignore next */
export function* watchFetchRelatedMovies() {
    yield takeEvery(actions.FETCH_RELATED_MOVIES, fetchRelatedMovies);
}

/* istanbul ignore next */
export default function* rootSaga() {
    //yield all([fork(fetchMovies), fork(watchFetchMovies)])
    yield all([fork(watchFetchMovies), fork(watchFetchRelatedMovies), fork(watchFetchMovie)]);
}
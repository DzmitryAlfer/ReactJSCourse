import { call, put, takeEvery, fork, all, select } from 'redux-saga/effects'
import * as actions from '../actions'
import {api} from "../services/api";
import {getSearchBy, getSortBy} from './selectors'

function* fetchMovies(params = {searchQuery: null}) {
    const sortBy = yield select(getSortBy);
    const searchBy = yield select(getSearchBy);
    const search = params.searchQuery;

    const movies = yield call(api.getMovies, {sortBy, searchBy, search});
    yield put(actions.movies.receiveMovies(movies));
}

export function* watchFetchMovies() {
    yield takeEvery(actions.FETCH_MOVIES, fetchMovies);
}

export default function* rootSaga() {
    yield all([fork(fetchMovies), fork(watchFetchMovies)])
}
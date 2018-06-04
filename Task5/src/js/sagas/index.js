import { call, put, takeEvery, fork, all } from 'redux-saga/effects'
import * as actions from '../actions'
import {api} from "../services/api";

function* fetchMovies() {
    const movies = yield call(api.getMovies)
    yield put(actions.movies.receiveMovies(movies));
}

export function* watchFetchMovies() {
    yield takeEvery(actions.FETCH_MOVIES, fetchMovies);
}

export default function* rootSaga() {
    yield all([fork(watchFetchMovies)])
}
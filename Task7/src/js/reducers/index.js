import { combineReducers } from 'redux';

import {
    RECEIVE_MOVIES,
    SORT_MOVIES,
    SEARCH_BY_MOVIES,
    RECEIVE_RELATED_MOVIES,
    SET_ERROR, RECEIVE_MOVIE,
} from '../actions';

import { SearchBy, SortBy } from '../common';

const moviesReducerInitialState = {
    data: [],
    total: 0,
    searchQuery: null,
    sortBy: SortBy.RELEASE_DATE,
    searchBy: SearchBy.TITLE,
};

const movieReducerInitialState = {
    movie: null,
    relatedMovies: {},
};

export function appReducer(state = { hasError: false }, action) {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                hasError: action.hasError,
            };
    }

    return state;
}

export function movieReducer(state = movieReducerInitialState, action) {
    console.log(`movie reducer. Action: ${action.type}`);

    switch (action.type) {
        case RECEIVE_RELATED_MOVIES:
            return {
                ...state,
                relatedMovies: action.movies,
            };

        case RECEIVE_MOVIE:
            return {
                ...state,
                movie: action.movie,
            };
    }

    return state;
}

export function moviesReducer(state = moviesReducerInitialState, action) {
    console.log(`movies reducer. Action: ${action.type}`);

    switch (action.type) {
        case RECEIVE_MOVIES:
            return {
                ...state,
                ...action.movies,
            };

        case SORT_MOVIES:
            return {
                ...state,
                sortBy: action.sortBy,
            };

        case SEARCH_BY_MOVIES:
            return {
                ...state,
                searchBy: action.searchBy,
            };
    }

    return state;
}

const rootReducer = combineReducers({
    appReducer, moviesReducer, movieReducer,
});

export default rootReducer;

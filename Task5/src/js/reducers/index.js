import {combineReducers} from "redux";

import {FETCH_MOVIES, RECEIVE_MOVIES, SORT_MOVIES} from '../actions'
import {SearchResultsSortByComponentState} from "../components/body/search/SearchResultsSortByComponent";

const initialState = {
    data: [],
    total: 0,
    sortBy : SearchResultsSortByComponentState.RELEASE_DATE
};

function moviesReducer(state = initialState, action){
    console.log(`reducer. Action: ${action.type}`);

    switch (action.type){
        case RECEIVE_MOVIES:
            return {...state
                ,...action.movies
            };

        case SORT_MOVIES:
            return {...state
                ,sortBy: action.sortBy
            };
    }

    return state;
}

const rootReducer = combineReducers({
    moviesReducer
});

export default rootReducer;
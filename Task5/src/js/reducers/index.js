import {combineReducers} from "redux";

import {FETCH_MOVIES, RECEIVE_MOVIES} from '../actions'

function moviesReducer(state = { data: [], total: 0 }, action){
    console.log(`reducer. Action: ${action.type}`);

    switch (action.type){
        case RECEIVE_MOVIES:
            return {...state
                ,...action.movies
            }
    }

    return state;
}

const rootReducer = combineReducers({
    moviesReducer
});

export default rootReducer;
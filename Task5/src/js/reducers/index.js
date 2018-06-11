import {combineReducers} from "redux";

import {FETCH_MOVIES, RECEIVE_MOVIES, SORT_MOVIES, SEARCH_BY_MOVIES} from '../actions'
import {SearchByButtonsComponentStates} from "../components/header/search/SearchByButtonsComponent";
import {SortBy} from "../common";

const initialState = {
    data: [],
    total: 0,
    sortBy : SortBy.RELEASE_DATE,
    searchBy: SearchByButtonsComponentStates.TITLE
};

function moviesReducer(state = initialState, action){
    console.log(`reducer. Action: ${action.type}`);

    switch (action.type){
        case RECEIVE_MOVIES:
            return {...state
                , ...action.movies
            };

        case SORT_MOVIES:
            return {...state
                , sortBy: action.sortBy
            };

        case SEARCH_BY_MOVIES:
            return{...state
                , searchBy: action.searchBy
            };
    }

    return state;
}

const rootReducer = combineReducers({
    moviesReducer
});

export default rootReducer;
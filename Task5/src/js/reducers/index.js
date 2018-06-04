import {combineReducers} from "redux";

function moviesReducer(state = { data: [], total: 0 }, action){
    console.log(`reducer. Action: ${action.type}`);
}

const rootReducer = combineReducers({
    moviesReducer
});

export default rootReducer;
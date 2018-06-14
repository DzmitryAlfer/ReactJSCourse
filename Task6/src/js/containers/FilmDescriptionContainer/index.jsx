import React, {PureComponent} from "react";
import { connect } from 'react-redux'
import {getMovie} from "../../selectors";

class FilmDescriptionContainer extends PureComponent {
    render(){
        return (<h1>Hellp</h1>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const { moviesReducer } = state;

    return {
        filteredResults : getMovie({...moviesReducer, movieId: ownProps.movieId}),
    }
};

export default connect(mapStateToProps) (FilmDescriptionContainer)
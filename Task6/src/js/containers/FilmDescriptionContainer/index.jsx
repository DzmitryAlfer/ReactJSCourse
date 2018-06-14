import React, {PureComponent} from "react";
import { connect } from 'react-redux'
import {getMovie} from "../../selectors";
import {DescriptionMovieDocHeader} from "../../components/header/DescriptionMovieDocHeader";

class FilmDescriptionContainer extends PureComponent {
    render(){
        return (<DescriptionMovieDocHeader movie={this.props.movie}/>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const { moviesReducer } = state;

    return {
        movie : getMovie({...moviesReducer, movieId: ownProps.movieId}),
    }
};

export default connect(mapStateToProps) (FilmDescriptionContainer)
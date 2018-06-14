import React, {PureComponent} from "react";
import * as actions from '../../actions'
import { connect } from 'react-redux'
import {DescriptionMovieDocHeader} from "../../components/header/DescriptionMovieDocHeader";
import {DescriptionMovieDocBody} from "../../components/body/DescriptionMovieDocBody";

class FilmDescriptionContainer extends PureComponent {

    componentDidMount() {
        if(this.props.movieId){
            this.props.dispatch(actions.movies.fetchMovie(this.props.movieId));
        }
    }

    render(){
        if(!this.props.movie)
            return null;

        return (<React.Fragment>
                <DescriptionMovieDocHeader movie={this.props.movie}/>
                <DescriptionMovieDocBody movie={this.props.movie}/>
            </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    const { movieReducer } = state;

    return {
        movie : movieReducer.movie,
    }
};

export default connect(mapStateToProps) (FilmDescriptionContainer)
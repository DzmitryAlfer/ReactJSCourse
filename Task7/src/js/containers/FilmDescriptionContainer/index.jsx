import React, {PureComponent, Component} from "react";
import * as actions from '../../actions'
import { connect } from 'react-redux'
import {DescriptionMovieDocHeader} from "../../components/header/DescriptionMovieDocHeader";
import {DescriptionMovieDocBody} from "../../components/body/DescriptionMovieDocBody";

class FilmDescriptionContainer extends Component {

    componentDidMount() {
        if(this.props.movieId){
            this.props.dispatch(actions.movies.fetchMovie(this.props.movieId));
        }
    }

    render(){
        /*if(!this.props.movieId)
            return null;

        if(this.props.movieId){
            this.props.dispatch(actions.movies.fetchMovie(this.props.movieId));
        }*/

        console.log('Render');

        if(!this.props.movie)
            return null;

        if(this.props.movie.id !== this.props.movieId){
            debugger;
            this.props.dispatch(actions.movies.fetchMovie(this.props.movieId));
        }

        return (<React.Fragment>
                <DescriptionMovieDocHeader movie={this.props.movie}/>
                <DescriptionMovieDocBody movie={this.props.movie}/>
            </React.Fragment>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const { movieReducer } = state;

    return {
        movie : movieReducer.movie,
        movieId: parseInt(ownProps.movieId, 10),
    }
};

export default connect(mapStateToProps) (FilmDescriptionContainer)
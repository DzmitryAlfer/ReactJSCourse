import React, { PureComponent } from 'react';
import * as actions from "../../../actions";
import {connect} from "react-redux";

class ErrorBoundary extends PureComponent {
    componentDidCatch(error, info) {
        this.props.dispatch(actions.app.setError(true));
    }

    render(){
        if(this.props.hasError) {
            return (<h1>Ooops, Something went wrong</h1>);
        }

        return this.props.children;
    }
}

const mapStateToProps = state => {
    const { appReducer } = state;

    return {
        hasError : appReducer.hasError
    }
};

export default connect (mapStateToProps)(ErrorBoundary);
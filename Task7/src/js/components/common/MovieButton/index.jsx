import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

export const MovieButton = ({text, onButtonClick, containerClass, buttonClass}) => (
    <div className={containerClass}>
        <button onClick={onButtonClick} className={buttonClass}>{text}</button>
    </div>
);

export const LinkMovieButton = withRouter((props) => {
    return (<MovieButton {...props} onButtonClick={
        () => {props.history.push('/search');}
    }/>);
});

MovieButton.defaultProps = {
    text: 'SEARCH',
    onButtonClick: () => {},
};

MovieButton.propTypes = {
    text: PropTypes.string.isRequired,
    containerClass: PropTypes.string,
    buttonClass: PropTypes.string,
    onButtonClick: PropTypes.func.isRequired,
};
import React from 'react';
import PropTypes from 'prop-types';

export const MovieButton = ({text, onButtonClick, containerClass, buttonClass}) => (
    <div className={containerClass}>
        <button onClick={onButtonClick} className={buttonClass}>{text}</button>
    </div>
);

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
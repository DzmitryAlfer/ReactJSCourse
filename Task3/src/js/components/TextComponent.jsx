import React from 'react';
import PropTypes from 'prop-types';

export const TextComponent = ({text, className}) => (<span className={className}>{text}</span>);

TextComponent.defaultProps = {
    text: "",
    className: ""
};

TextComponent.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};
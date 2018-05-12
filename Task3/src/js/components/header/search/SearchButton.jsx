import React from 'react';
import PropTypes from 'prop-types';

export const SearchButton = ({text, onSearchClick}) => (
    <div className="search-by-control_item">
        <button onClick={onSearchClick} className="search-button header-text search-by-control_button search-by-control_button--selected">{text}</button>
    </div>
);

SearchButton.defaultProps = {
    text: 'SEARCH',
};

SearchButton.propTypes = {
    text: PropTypes.string.isRequired,
    onSearchClick: PropTypes.func,
};
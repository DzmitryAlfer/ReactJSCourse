import React from 'react';
import PropTypes from 'prop-types';

export const SearchResultsNumberOfItemsComponent = ({numberOfItems})=> (
    <div className="search-info_item">
        <span className="search-info_text">{numberOfItems} movies found</span>
    </div>
);

SearchResultsNumberOfItemsComponent.propTypes = {
    numberOfItems: PropTypes.number.isRequired
}
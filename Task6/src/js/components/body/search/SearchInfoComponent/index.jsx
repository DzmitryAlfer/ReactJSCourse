import React from 'react';
import PropTypes from 'prop-types';
import { SearchResultsNumberOfItemsComponent } from '../SearchResultsNumberOfItemsComponent/index';
import  SearchResultsSortByComponent from '../SearchResultsSortByComponent/index';


export const SearchInfoComponent = ({ numberOfItems }) => (
    <div className="document-header_item search-info">
        <SearchResultsNumberOfItemsComponent numberOfItems={numberOfItems} />
        <SearchResultsSortByComponent />
  </div>
);

SearchInfoComponent.propTypes = {
    numberOfItems: PropTypes.number.isRequired,
    onSortBy: PropTypes.func,
};

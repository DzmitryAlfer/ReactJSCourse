import React from 'react';
import PropTypes from 'prop-types';
import {SearchResultsNumberOfItemsComponent} from './SearchResultsNumberOfItemsComponent';
import {SearchResultsSortByComponent} from './SearchResultsSortByComponent';


export const SearchInfoComponent = ({numberOfItems, onSortBy}) => (
    <div className="document-header_item search-info">
        <SearchResultsNumberOfItemsComponent numberOfItems={numberOfItems}/>
        <SearchResultsSortByComponent onSortBy={onSortBy}/>
    </div>
);

SearchInfoComponent.propTypes = {
    numberOfItems: PropTypes.number.isRequired,
    onSortBy : PropTypes.func
}
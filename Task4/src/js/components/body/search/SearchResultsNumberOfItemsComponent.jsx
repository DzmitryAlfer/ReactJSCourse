import React from 'react';
import PropTypes from 'prop-types';
import {TextComponent} from "../../common/TextComponent";

export const SearchResultsNumberOfItemsComponent = ({numberOfItems, author})=> (
    <div className="search-info_item">
        <TextComponent text={numberOfItems >= 0 ? `${numberOfItems} movies found` : `Films by ${author}`} className='search-info_text'/>
    </div>
);

SearchResultsNumberOfItemsComponent.defaultProps = {
    numberOfItems: -1,
    author: ''
};

SearchResultsNumberOfItemsComponent.propTypes = {
    numberOfItems: PropTypes.number.isRequired,
    author: PropTypes.string,
};
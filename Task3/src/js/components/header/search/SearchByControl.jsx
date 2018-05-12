import React from 'react';
import PropTypes from 'prop-types';
import {SearchByButtonsComponent} from "./SearchByButtonsComponent";
import {SearchButton} from "./SearchButton";

export const SearchByControl = ({onSearchByClick, onSearchClick}) => (
        <div className="header-search-control_item search-by-control">
            <SearchByButtonsComponent onSearchBy={onSearchByClick}/>
            <SearchButton text='SEARCH' onSearchClick={onSearchClick} />
        </div>);

SearchByControl.propTypes = {
    onSearchByClick: PropTypes.func,
    onSearchClick: PropTypes.func,
};
import React from 'react';
import PropTypes from 'prop-types';
import SearchByButtonsComponent from "./SearchByButtonsComponent";
import {MovieButton} from "../../common/MovieButton";

export const SearchByControl = ({onSearchByClick, onSearchClick}) => (
        <div className="header-search-control_item search-by-control">
            <SearchByButtonsComponent onSearchBy={onSearchByClick}/>
            <MovieButton text='SEARCH' onButtonClick={onSearchClick}
                         containerClass='search-by-control_item' buttonClass='search-button header-text search-by-control_button search-by-control_button--selected' />
        </div>);

SearchByControl.propTypes = {
    onSearchByClick: PropTypes.func,
    onSearchClick: PropTypes.func,
};
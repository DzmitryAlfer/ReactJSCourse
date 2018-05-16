import React from 'react';
import PropTypes from "prop-types";

import { SearchControlHeader } from './SearchControlHeader';


export const DocumentHeaderComponent = ({onSearchClick}) => (
    <header className="document-header">
        <SearchControlHeader onSearchClick={onSearchClick}></SearchControlHeader>
    </header>
);

DocumentHeaderComponent.propTypes = {
    onSearchClick: PropTypes.func,
};
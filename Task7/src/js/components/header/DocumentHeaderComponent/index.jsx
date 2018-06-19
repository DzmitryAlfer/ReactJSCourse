import React from 'react';
import PropTypes from "prop-types";

import { SearchControlHeader } from '../SearchControlHeader';


export const DocumentHeaderComponent = ({onSearchClick, initialSearchString}) => (
    <header className="document-header">
        <SearchControlHeader initialSearchString={initialSearchString} onSearchClick={onSearchClick}></SearchControlHeader>
    </header>
);

DocumentHeaderComponent.defaultProps = {
    onSearchClick: () => {},
    initialSearchString: '',
};

DocumentHeaderComponent.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
    initialSearchString: PropTypes.string,
};
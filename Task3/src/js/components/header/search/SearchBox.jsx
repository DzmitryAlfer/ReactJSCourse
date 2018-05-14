import React from 'react';
import PropTypes from "prop-types";

export const SearchBox = ({inputControlRef}) =>(
    <div className="header-search-control_item">
        <input type="search" className="header-search-control_input-search" ref={inputControlRef}/>
    </div>
);

SearchBox.propTypes = {
    inputControlRef: PropTypes.shape({ value: PropTypes.instanceOf(HTMLInputElement) }),
};
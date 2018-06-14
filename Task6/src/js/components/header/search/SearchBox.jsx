import React from 'react';
import PropTypes from "prop-types";

export const SearchBox = ({inputControlRef, text}) =>(
    <div className="header-search-control_item">
        <input type="search" className="header-search-control_input-search" ref={inputControlRef} defaultValue={text}/>
    </div>
);

SearchBox.propTypes = {
    inputControlRef: PropTypes.func,
    text: PropTypes.string,
};
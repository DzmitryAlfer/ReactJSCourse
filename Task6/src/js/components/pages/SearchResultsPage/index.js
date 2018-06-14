import React from 'react';

export const SearchResultsPage = (props) => {
    return (
        <p>Search Results page: {props.match.params.searchQuery}.</p>
    );
};
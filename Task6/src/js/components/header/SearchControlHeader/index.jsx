import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {FindYourMovieHeaderComponent} from '../search/FindYourMovieHeaderComponent'
import {SearchBox} from "../search/SearchBox";
import {SearchByControl} from "../search/SearchByControl";
import {withRouter} from 'react-router-dom'

export const SearchControlHeader = withRouter((props) => {
    let searchInput;

    return (
        <div className="document-header_item header-search-control">
            <FindYourMovieHeaderComponent/>
            <SearchBox text={props.initialSearchString} inputControlRef={(el) => {
                searchInput = el;
            }}/>
            <SearchByControl onSearchClick={() => {
                props.history.push(`/search${searchInput.value === '' ? '' : `/${searchInput.value}`}`);
                props.onSearchClick(searchInput.value);
            }}/>
        </div>
    );
});

SearchControlHeader.defaultProps = {
    onSearchClick: () => {},
    initialSearchString: '',
};

SearchControlHeader.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
    initialSearchString: PropTypes.string,
};

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {FindYourMovieHeaderComponent} from './search/FindYourMovieHeaderComponent'
import {SearchBox} from "./search/SearchBox";
import {SearchByControl} from "./search/SearchByControl";

export class SearchControlHeader extends PureComponent {

    render() {
        return (
            <div className="document-header_item header-search-control">
				<FindYourMovieHeaderComponent/>
				<SearchBox inputControlRef={(el) => {this.searchInput = el;}}/>
				<SearchByControl onSearchClick={() => {this.props.onSearchClick(this.searchInput.value)}}/>
			</div>
        );
    }
}

SearchControlHeader.defaultProps = {
    onSearchClick: () => {},
};

SearchControlHeader.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
};

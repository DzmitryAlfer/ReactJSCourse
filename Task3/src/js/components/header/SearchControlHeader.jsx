import React, { PureComponent } from 'react';
import {FindYourMovieHeaderComponent} from './search/FindYourMovieHeaderComponent'
import {SearchBox} from "./search/SearchBox";
import {SearchByControl} from "./search/SearchByControl";

export class SearchControlHeader extends PureComponent {
    render() {
        return (
            <div className="document-header_item header-search-control">
				<FindYourMovieHeaderComponent/>
				<SearchBox/>
				<SearchByControl onSearchClick={() => {alert(1);}}/>
			</div>
        );
    }
}
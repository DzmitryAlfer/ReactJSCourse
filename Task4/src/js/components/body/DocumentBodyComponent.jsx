import React, { PureComponent } from 'react';

import {SearchResultsContainer} from './search/SearchResultsContainer';
import {SearchInfoComponent} from './search/SearchInfoComponent';

export class DocumentBodyComponent extends PureComponent {
    render() {
        return (<main className="main-body">
            <SearchResultsContainer searchString={this.props.searchString} onItemClick={this.props.onItemClick}/>
        </main>);
    }
}
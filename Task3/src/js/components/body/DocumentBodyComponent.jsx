import React, { PureComponent } from 'react';

import {SearchResultsContainer} from './search/SearchResultsContainer';

export class DocumentBodyComponent extends PureComponent {
    render() {
        return (<main className="main-body">
            <SearchResultsContainer></SearchResultsContainer>
        </main>);
    }
}
import React, { PureComponent } from 'react';
import { SearchControlHeader } from './SearchControlHeader';
import {SearchInfoComponent} from './search/SearchInfoComponent';

export class DocumentHeaderComponent extends PureComponent {
    render() {
        return (<header className="document-header">
            <SearchControlHeader></SearchControlHeader>
            <SearchInfoComponent numberOfItems={7} onSortBy={(e) => { console.log(`click '${e}'`)}}></SearchInfoComponent>
        </header>);
    }
}
import React, { PureComponent } from 'react';
import { SearchControlHeader } from './SearchControlHeader';

export class DocumentHeaderComponent extends PureComponent {
    render() {
        return (<header className="document-header">
            <SearchControlHeader></SearchControlHeader>
        </header>);
    }
}


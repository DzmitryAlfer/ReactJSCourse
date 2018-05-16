import React from 'react';
import { TextComponent } from './common/TextComponent/TextComponent';

export class SearchByComponent extends React.Component {
    render() {
        return(<div className="left-search-by">
            <TextComponent text="SEARCH BY"></TextComponent>
            <button>TITLE</button>
            <button>DIRECTOR</button>
        </div>);
    }
}
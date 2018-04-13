import React from 'react';
import { TextComponent } from './TextComponent';
import { SearchByComponent } from './SearchByComponent';

export class DocumentHeaderComponent extends React.PureComponent {
    render() {
        return (<header> 
            <div id="search-control">
				<div>
					<TextComponent text="FIND YOUR MOVIE"></TextComponent>
				</div>
				<div>
					<input type="search"/>
				</div>
				<div>
					<SearchByComponent></SearchByComponent>
					<div className="right-search-button">
					</div>
				</div>
			</div>
        </header>);
    }
}
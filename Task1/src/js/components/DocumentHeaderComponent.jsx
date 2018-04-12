import React from 'react';
import { TextComponent } from './TextComponent';

export class DocumentHeaderComponent extends React.Component {
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
					<div className="left-search-by">
						<span>SEARCH BY</span>
						<button>TITLE</button>
						<button>DIRECTOR</button>
					</div>
					<div className="right-search-button">

					</div>
				</div>
			</div>
        </header>);
    }
}
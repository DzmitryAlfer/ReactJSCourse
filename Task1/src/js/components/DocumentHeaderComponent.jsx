import React from 'react';

export class DocumentHeaderComponent extends React.Component {
    render() {
        return (<header> 
            <div id="search-control">
				<div>
					<span>FIND YOUR MOVIE</span>
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
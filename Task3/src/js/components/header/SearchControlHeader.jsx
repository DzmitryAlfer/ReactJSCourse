import React, { PureComponent } from 'react';

export class SearchControlHeader extends PureComponent {
    render(){
        return (
            <div className="document-header_item header-search-control">
				<div className="header-search-control_item">
					<span className="header-text">FIND YOUR MOVIE</span>
				</div>

				<div className="header-search-control_item">
					<input type="search" className="header-search-control_input-search"/>
				</div>

				<div className="header-search-control_item search-by-control">
					<div className="search-by-control_item">
						<span className="header-text">SEARCH BY</span>
						<button className="header-text search-by-control_button search-by-control_button--selected">TITLE</button>
						<button className="header-text search-by-control_button">DIRECTOR</button>
					</div>
					<div className="search-by-control_item">
						<button className="search-button header-text search-by-control_button search-by-control_button--selected">SEARCH</button>
					</div>
				</div>
			</div>
        );
    }
}
import React, { PureComponent } from 'react';

export class SearchControlHeader extends PureComponent {
    render(){
        return (
            <div class="document-header_item header-search-control">
				<div class="header-search-control_item">
					<span class="header-text">FIND YOUR MOVIE</span>
				</div>
				<div class="header-search-control_item">
					<input type="search" class="header-search-control_input-search"/>
				</div>
				<div class="header-search-control_item search-by-control">
					<div class="search-by-control_item">
						<span class="header-text">SEARCH BY</span>
						<button class="header-text search-by-control_button search-by-control_button--selected">TITLE</button>
						<button class="header-text search-by-control_button">DIRECTOR</button>
					</div>
					<div class="search-by-control_item">
						<button class="search-button header-text search-by-control_button search-by-control_button--selected">SEARCH</button>
					</div>
				</div>
			</div>
        );
    }
}
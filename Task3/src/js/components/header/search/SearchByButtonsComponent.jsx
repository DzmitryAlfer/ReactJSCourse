import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

export const SearchByButtonsComponentStates = Object.freeze({
    TITLE: 'title',
    DIRECTOR: 'director',
});

export class SearchByButtonsComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { searchBy: SearchByButtonsComponentStates.TITLE };
        this.onSearchBy = this.onSearchBy.bind(this);
    }

    onSearchBy(searchBy = SearchByButtonsComponentStates.TITLE) {
        if (this.props.onSearchBy) {
            this.props.onSearchBy(searchBy);
        }

        this.setState({
            searchBy,
        });
    }

    render() {
        return (
            <div className="search-by-control_item">
                <span className="header-text">SEARCH BY</span>
                <button className={`header-text search-by-control_button${this.state.searchBy === SearchByButtonsComponentStates.TITLE
                    ? ' search-by-control_button--selected' : ''}`} onClick={() => this.onSearchBy(SearchByButtonsComponentStates.TITLE)}>TITLE</button>
                <button className={`header-text search-by-control_button${this.state.searchBy === SearchByButtonsComponentStates.DIRECTOR
                    ? ' search-by-control_button--selected' : ''}`} onClick={() => this.onSearchBy(SearchByButtonsComponentStates.DIRECTOR)}>DIRECTOR</button>
            </div>
        );
    }
}

SearchByButtonsComponent.propTypes = {
    onSearchBy: PropTypes.func,
};
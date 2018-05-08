import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const SearchResultsSortByComponentState = Object.freeze({
    RELEASE_DATE: 'release-date',
    RATING: 'rating'
});

export class SearchResultsSortByComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { sortBy: SearchResultsSortByComponentState.RELEASE_DATE };
        this.onSortBy.bind(this);
    }

    onSortBy(sortBy = SearchResultsSortByComponentState.RELEASE_DATE) {
        if(this.props.onSortBy) {
            this.props.onSortBy(sortBy);
        }

        this.setState({
            sortBy: sortBy
        });
    }

    render() {
        return (
            <div className="search-info_item">
                <span className="search-info_text">Sort by</span>
                <button className={`sort-by_button${ this.state.sortBy === SearchResultsSortByComponentState.RELEASE_DATE ? ' sort-by_button--selected' : ''}`} onClick={this.onSortBy(SearchResultsSortByComponentState.RELEASE_DATE)}>release date</button>
                <button className={`sort-by_button${ this.state.sortBy === SearchResultsSortByComponentState.RATING ? ' sort-by_button--selected' : ''}`} onClick={this.onSortBy(SearchResultsSortByComponentState.RATING)}>rating</button>
            </div>);
    }
}

SearchResultsSortByComponent.propTypes = {
    onSortBy : PropTypes.func
};
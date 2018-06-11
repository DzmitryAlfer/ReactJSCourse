import React from 'react';
import Renderer from 'react-test-renderer';
import SearchResultsSortByComponent from '../'
import {mount} from 'enzyme';
import {SortBy} from "../../../../../common";

describe('SearchResultsSortByComponent', () => {
    test('Component render1', () => {

        const tree = Renderer.create(
            <SearchResultsSortByComponent/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Test button click', () => {
        const onButtonClick = jest.fn();
        const wrapper = mount((
            <SearchResultsSortByComponent onSortBy={onButtonClick} />
        ));

        wrapper.find('.rating').simulate('click');
        expect(onButtonClick).toHaveBeenCalledWith(SortBy.RATING);

        wrapper.find('.release').simulate('click');
        expect(onButtonClick).toHaveBeenCalledWith(SearchResultsSortByComponentState.RELEASE_DATE);
    });
});
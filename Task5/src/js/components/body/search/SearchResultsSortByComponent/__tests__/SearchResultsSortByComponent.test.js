import React from 'react';
import Renderer from 'react-test-renderer';
import {SearchResultsSortByComponent, SearchResultsSortByComponentState} from '../index'
import {mount} from 'enzyme';

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
        expect(onButtonClick).toHaveBeenCalledWith(SearchResultsSortByComponentState.RATING);

        wrapper.find('.release').simulate('click');
        expect(onButtonClick).toHaveBeenCalledWith(SearchResultsSortByComponentState.RELEASE_DATE);
    });
});
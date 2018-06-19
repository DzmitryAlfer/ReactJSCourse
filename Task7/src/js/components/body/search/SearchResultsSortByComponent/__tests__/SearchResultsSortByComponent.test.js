import React from 'react';
import Renderer from 'react-test-renderer';
import SearchResultsSortByComponent from '../';
import { mount } from 'enzyme';
import { SortBy } from '../../../../../common';
import { Provider } from 'react-redux';
import configureStore from '../../../../../store/configureStore';

const { store } = configureStore();

describe('SearchResultsSortByComponent', () => {
    test('Component render1', () => {
        const tree = Renderer.create(<Provider store={store}>
            <SearchResultsSortByComponent />
        </Provider>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    /* test('Test button click', () => {
        const onButtonClick = jest.fn();
        const wrapper = mount((
            <Provider store={store}>
                <SearchResultsSortByComponent onSortBy={onButtonClick} />
            </Provider>
        ));

        wrapper.find('.rating').simulate('click');
        expect(onButtonClick).toHaveBeenCalledWith(SortBy.RATING);

        wrapper.find('.release').simulate('click');
        expect(onButtonClick).toHaveBeenCalledWith(SortBy.RELEASE_DATE);
    }); */
});

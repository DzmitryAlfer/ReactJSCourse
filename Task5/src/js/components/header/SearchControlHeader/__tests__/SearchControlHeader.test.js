import React from 'react';
import {SearchControlHeader} from "../index";
import {mount} from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from "../../../../store/configureStore";

const {store} = configureStore();
describe('SearchControlHeader', () => {
    test('Test button click', () => {
        const onButtonClick = jest.fn();
        const wrapper = mount((
            <Provider store={store}>
                <SearchControlHeader onSearchClick={onButtonClick} />
            </Provider>
        ));

        wrapper.find('.search-button').simulate('click');
        expect(onButtonClick).toHaveBeenCalledWith('');
    });
});
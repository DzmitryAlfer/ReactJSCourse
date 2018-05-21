import React from 'react';
import {SearchControlHeader} from "../index";
import {mount} from 'enzyme';

describe('SearchControlHeader', () => {
    test('Test button click', () => {
        const onButtonClick = jest.fn();
        const wrapper = mount((
            <SearchControlHeader onSearchClick={onButtonClick} />
        ));

        wrapper.find('.search-button').simulate('click');
        expect(onButtonClick).toHaveBeenCalledWith('');
    });
});
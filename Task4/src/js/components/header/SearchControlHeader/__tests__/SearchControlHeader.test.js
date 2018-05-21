import React from 'react';
import sinon from 'sinon';
import {SearchControlHeader} from "../index";
import {mount} from 'enzyme';

describe('SearchControlHeader', () => {
    test('Test button click', () => {
        const onButtonClick = sinon.spy();
        const wrapper = mount((
            <SearchControlHeader onSearchClick={onButtonClick} />
        ));

        wrapper.find('.search-button').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });
});
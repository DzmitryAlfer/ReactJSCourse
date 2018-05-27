import React from 'react';
import Renderer from 'react-test-renderer';
import {SearchResultsSortByComponent} from '../index'

describe('SearchResultsSortByComponent', () => {
    test('Component render1', () => {

        const tree = Renderer.create(
            <SearchResultsSortByComponent/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

});
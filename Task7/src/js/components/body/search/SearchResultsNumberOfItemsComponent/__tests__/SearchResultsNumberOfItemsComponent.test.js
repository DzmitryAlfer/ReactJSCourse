import React from 'react';
import Renderer from 'react-test-renderer';
import { SearchResultsNumberOfItemsComponent } from '../index';

describe('SearchResultsNumberOfItemsComponent', () => {
    test('Component render1', () => {
        const tree = Renderer.create(<SearchResultsNumberOfItemsComponent numberOfItems={2} author="Benjamin Franklin" />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Component render2', () => {
        const tree = Renderer.create(<SearchResultsNumberOfItemsComponent author="Benjamin Franklin" />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

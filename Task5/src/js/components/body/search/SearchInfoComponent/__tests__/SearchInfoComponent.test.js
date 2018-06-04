import React from 'react';
import Renderer from 'react-test-renderer';
import {SearchInfoComponent} from "../index";

jest.mock('../../SearchResultsNumberOfItemsComponent');
jest.mock('../../SearchResultsSortByComponent');

describe('SearchInfoComponent', () => {
    test('Component render', () => {

        const tree = Renderer.create(
            <SearchInfoComponent numberOfItems={2} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
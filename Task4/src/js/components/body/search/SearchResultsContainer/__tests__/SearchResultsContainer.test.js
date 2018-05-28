import React from 'react';
import Renderer from 'react-test-renderer';
import {SearchResultsContainer} from '../index'

jest.mock('../../SearchResultsComponent')

describe('SearchResultsContainer', () => {
    test('Component render1', () => {

        const tree = Renderer.create(
            <SearchResultsContainer />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Component render2', () => {

        const tree = Renderer.create(
            <SearchResultsNumberOfItemsComponent author={'Benjamin Franklin'}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
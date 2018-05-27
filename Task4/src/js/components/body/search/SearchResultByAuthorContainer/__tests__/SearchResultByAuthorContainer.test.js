import React from 'react';
import Renderer from 'react-test-renderer';
import {SearchResultByAuthorContainer} from '../index'

jest.mock('../../../../../services/api/MoviesDataSource');

describe('SearchResultByAuthorContainer', () => {
    test('Component render', () => {

        const tree = Renderer.create(
            <SearchResultByAuthorContainer author='Show all'/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
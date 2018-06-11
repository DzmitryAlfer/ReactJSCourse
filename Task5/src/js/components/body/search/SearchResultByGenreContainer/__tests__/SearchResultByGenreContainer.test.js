import React from 'react';
import Renderer from 'react-test-renderer';
import SearchResultByGenreContainer from '../index'

jest.mock('../../../../../services/api/MoviesDataSource');

describe('SearchResultByAuthorContainer', () => {
    test('Component render', () => {

        const tree = Renderer.create(
            <SearchResultByGenreContainer author='Show all'/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
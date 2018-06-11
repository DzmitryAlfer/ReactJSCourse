import React from 'react';
import Renderer from 'react-test-renderer';
import SearchResultByGenreContainer from '../index'

jest.mock('../../../../../services/api');

describe('SearchResultByGenreContainer', () => {
    test('Component render', () => {

        const tree = Renderer.create(
            <SearchResultByGenreContainer movie={{id:1}}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
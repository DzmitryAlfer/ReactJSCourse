import React from 'react';
import Renderer from 'react-test-renderer';
import {SearchResultsContainer} from '../index'

jest.mock('../../SearchResultsComponent');
jest.mock('../../../../../services/api/MoviesDataSource');

describe('SearchResultsContainer', () => {
    test('Component render1', () => {

        const tree = Renderer.create(
            <SearchResultsContainer />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    /*test('Component render2', () => {

        jest.unmock('../../../../../services/api/MoviesDataSource');
        jest.mock('../../../../../services/api/MoviesDataSource', () => {
            return {
                getMovies() {
                    return new Promise((resolve, reject) => {
                        resolve({
                            "data": [],
                            "total": 3000,
                            "offset": 0,
                            "limit": 10
                        });
                    });
                },

                getMoviesByAuthor({author}) {
                    return this.getMovies();
                },
            };
        });

        const tree = Renderer.create(
            <SearchResultsContainer/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });*/
});
import React from 'react';
import Renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import SearchResultsContainer from '../';
import configureStore from '../../../../../store/configureStore';

jest.mock('../../SearchResultsComponent');
jest.mock('../../../../../services/api');

const { store } = configureStore();

describe('SearchResultsContainer', () => {
    test('Component render1', () => {
        const tree = Renderer.create(<Provider store={store}>
            <SearchResultsContainer />
        </Provider>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    /* test('Component render2', () => {

        jest.unmock('../../../../../services/api');
        jest.mock('../../../../../services/api', () => {
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
    }); */
});

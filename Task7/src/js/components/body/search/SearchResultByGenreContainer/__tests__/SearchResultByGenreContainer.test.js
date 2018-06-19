import React from 'react';
import Renderer from 'react-test-renderer';
import SearchResultByGenreContainer from '../index';
import { Provider } from 'react-redux';
import configureStore from '../../../../../store/configureStore';

const { store } = configureStore();

jest.mock('../../../../../services/api');

describe('SearchResultByGenreContainer', () => {
    test('Component render', () => {
        const tree = Renderer.create(<Provider store={store}>
            <SearchResultByGenreContainer movie={{
                id: 962,
                title: 'The Gold Rush',
                tagline: "The World's Greatest Laughing Picture!",
                vote_average: 7.8,
                vote_count: 411,
                release_date: '1925-06-25',
                poster_path: 'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                overview: 'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.',
                budget: 923000,
                revenue: 2500000,
                genres: ['Adventure', 'Comedy', 'Drama'],
                runtime: 95,
            }}
            />
        </Provider>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

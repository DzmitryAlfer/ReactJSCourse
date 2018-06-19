import React from 'react';
import Renderer from 'react-test-renderer';
import { DescriptionMovieDocHeader } from '../index';

jest.mock('../../../common/MovieButton');
jest.mock('../../MovieDescriptionHeader');

describe('DescriptionMovieDocHeader', () => {
    test('Component render', () => {
        const tree = Renderer.create(<DescriptionMovieDocHeader movie={{
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
        />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

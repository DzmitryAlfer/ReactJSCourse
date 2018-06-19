import React from 'react';
import Renderer from 'react-test-renderer';
import { MovieList } from '../index';

jest.mock('../../SearchResultItemComponent');

describe('MovieList', () => {
    test('Component render', () => {
        const tree = Renderer.create(<MovieList movies={[{
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
        }, {
            id: 19,
            title: 'Metropolis',
            tagline: 'There can be no understanding between the hands and the brain unless the heart acts as mediator.',
            vote_average: 8.1,
            vote_count: 837,
            release_date: '1927-01-10',
            poster_path: 'https://image.tmdb.org/t/p/w500/qriaeUUwdmlgethK3aSAx68mG05.jpg',
            overview: "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.",
            budget: 92620000,
            revenue: 650422,
            genres: ['Drama', 'Science Fiction'],
            runtime: 153,
        }]}
        />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

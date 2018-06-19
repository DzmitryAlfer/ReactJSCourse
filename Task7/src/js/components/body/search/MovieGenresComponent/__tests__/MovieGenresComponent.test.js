import React from 'react';
import Renderer from 'react-test-renderer';
import { MovieGenresComponent } from '../index';

describe('MovieGenresComponent', () => {
    test('Component render', () => {
        const tree = Renderer.create(<MovieGenresComponent genres={['genre1', 'genre2', 'genre3']} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

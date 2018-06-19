import React from 'react';
import Renderer from 'react-test-renderer';
import { MovieButton } from '../';

describe('MovieButton', () => {
    test('Component render', () => {
        const tree = Renderer.create(<MovieButton text="some-text" containerClass="container-class" buttonClass="button-class" />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

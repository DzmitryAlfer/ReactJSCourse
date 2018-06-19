import React from 'react';
import Renderer from 'react-test-renderer';
import { DocumentHeaderComponent } from '../index';

jest.mock('../../SearchControlHeader');

describe('DocumentHeaderComponent', () => {
    test('Component render', () => {
        const tree = Renderer.create(<DocumentHeaderComponent />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

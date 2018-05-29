import React from 'react';
import Renderer from 'react-test-renderer';
import {DocumentComponent} from '../index';

jest.mock('../../header/DocumentHeaderComponent');
jest.mock('../../body/DocumentBodyComponent');

describe('DocumentComponent', () => {
    test('Component render', () => {

        const tree = Renderer.create(
            <DocumentComponent/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
import React from 'react';
import Renderer from 'react-test-renderer';
import {DocumentBodyComponent} from "../";

jest.mock('../../search/SearchResultsContainer/index');

describe('DocumentBodyComponent', () => {
    test('Component render', () => {
        const tree = Renderer.create(
            <DocumentBodyComponent/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
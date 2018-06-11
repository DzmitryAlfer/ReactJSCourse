import React from 'react';
import Renderer from 'react-test-renderer';
import Root from "../";

import configureStore from "../../../store/configureStore";

const store = configureStore();

jest.mock('../../../components/DocumentComponent');

describe('Root', () => {
    test('Component render', () => {
        const tree = Renderer.create(
            <Root store={store}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
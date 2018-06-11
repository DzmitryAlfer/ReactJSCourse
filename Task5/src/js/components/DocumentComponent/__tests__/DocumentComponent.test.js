import React from 'react';
import Renderer from 'react-test-renderer';
import {DocumentComponent} from '../index';
import { Provider } from 'react-redux'
import configureStore from "../../../store/configureStore";

const store = configureStore();

jest.mock('../../header/DocumentHeaderComponent');
jest.mock('../../body/DocumentBodyComponent');

describe('DocumentComponent', () => {
    test('Component render', () => {

        const tree = Renderer.create(
            <Provider store={store}>
                <DocumentComponent/>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
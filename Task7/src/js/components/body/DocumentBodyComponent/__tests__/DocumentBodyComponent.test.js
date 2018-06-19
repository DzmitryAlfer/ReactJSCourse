import React from 'react';
import Renderer from 'react-test-renderer';
import { DocumentBodyComponent } from '../';
import { Provider } from 'react-redux';
import configureStore from '../../../../store/configureStore';

const { store } = configureStore();

jest.mock('../../search/SearchResultsContainer/index');

describe('DocumentBodyComponent', () => {
    test('Component render', () => {
        const tree = Renderer.create(<Provider store={store}>
            <DocumentBodyComponent />
        </Provider>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

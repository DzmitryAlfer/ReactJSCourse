import React from 'react';
import Renderer from 'react-test-renderer';
import {SearchInfoComponent} from "../";
import { Provider } from 'react-redux'
import configureStore from "../../../../../store/configureStore";

const {store} = configureStore();
jest.mock('../../SearchResultsNumberOfItemsComponent');
jest.mock('../../SearchResultsSortByComponent');

describe('SearchInfoComponent', () => {
    test('Component render', () => {

        const tree = Renderer.create(
            <Provider store={store}>
                <SearchInfoComponent numberOfItems={2} />
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
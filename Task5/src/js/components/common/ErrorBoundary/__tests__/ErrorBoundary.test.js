import React from 'react';
import Renderer from 'react-test-renderer';
import ErrorBoundary from "../";
import { Provider } from 'react-redux'
import configureStore from "../../../../store/configureStore";

const {store} = configureStore();

describe('ErrorBoundary', () => {
    test('Component render without exception', () => {
        const tree = Renderer.create(
            <Provider store={store}>
                <ErrorBoundary>
                    <span>This text should be rendered</span>
                </ErrorBoundary>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    /*test('Component render with exception', () => {

        const thr = () => { throw 'EXCEPTION'};

        const tree = Renderer.create(
            <ErrorBoundary>
                { 1/0 }
            </ErrorBoundary>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });*/
});
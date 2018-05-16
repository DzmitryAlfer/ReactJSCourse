import React from 'react';
import Renderer from 'react-test-renderer';
import ErrorBoundary from "../ErrorBoundary";

describe('ErrorBoundary', () => {
    test('Component render without exception', () => {
        const tree = Renderer.create(
            <ErrorBoundary>
                <span>This text should be rendered</span>
            </ErrorBoundary>
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
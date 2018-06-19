import React from 'react';
import Renderer from 'react-test-renderer';
import {TextInContainerComponent} from "../";

jest.mock('../../TextComponent');

describe('TextInContainerComponent', () => {
    test('Component render', () => {

        const tree = Renderer.create(
            <TextInContainerComponent text='some-text' textClass='text-class' containerClass='container-class'/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
import React from 'react';
import Renderer from 'react-test-renderer';
import {TextComponent} from "../TextComponent";

describe('TextComponent', () => {
    test('Component render', () => {
        const tree = Renderer.create(
            <TextComponent text='some-text' className='component-class'/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
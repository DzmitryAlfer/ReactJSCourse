import React from 'react';
import Renderer from 'react-test-renderer';
import {MovieDescriptionHeader} from "../index";

jest.mock('../../../../common/TextInContainerComponent');

describe('MovieDescriptionHeader', () => {
    test('Component render', () => {

        const tree = Renderer.create(
            <MovieDescriptionHeader movie={{poster_path:'image.png'}}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
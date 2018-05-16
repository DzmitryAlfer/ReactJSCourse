import {MoviePropType} from "../MoviePropType";

describe('movie prop type checker', () => {
    test('movie prop type checker', () => {
        expect(MoviePropType).toMatchSnapshot();
    });
});
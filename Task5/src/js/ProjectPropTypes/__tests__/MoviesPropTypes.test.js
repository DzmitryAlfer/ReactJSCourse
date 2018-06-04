import {MoviesPropTypes} from "../MoviesPropTypes";

describe('movie array prop type checker', () => {
    test('movie array prop type checker', () => {
        expect(MoviesPropTypes).toMatchSnapshot();
    });
});
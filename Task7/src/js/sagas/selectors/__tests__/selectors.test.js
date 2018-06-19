import { getSearchBy, getSortBy } from '../';
import { SearchBy, SortBy } from '../../../common';


describe('sagas.selectors', () => {
    test('getSortBy', () => {
        const sortBy = getSortBy({ moviesReducer: { sortBy: SortBy.RATING } });
        expect(sortBy).toEqual(SortBy.RATING);
    });

    test('getSearchBy', () => {
        const searchBy = getSearchBy({ moviesReducer: { searchBy: SearchBy.GENRES } });
        expect(searchBy).toEqual(SearchBy.GENRES);
    });
});

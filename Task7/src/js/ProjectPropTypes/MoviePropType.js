import PropType from 'prop-types';

export const MoviePropType = {
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    tagline: PropType.string,
    vote_average: PropType.number,
    vote_count: PropType.number,
    release_date: PropType.string,
    poster_path: PropType.string.isRequired,
    overview: PropType.string,
    budget: PropType.number,
    revenue: PropType.number,
    genres: PropType.arrayOf(PropType.string),
    runtime: PropType.any,
};

import PropType from 'prop-types'
import {MoviePropType} from './MoviePropType';

export const MoviesPropType = {
    data: PropType.arrayOf(PropType.shape(MoviePropType)),
    total: PropType.number.isRequired,
    offset: PropType.number.isRequired,
    limit: PropType.number.isRequired
};
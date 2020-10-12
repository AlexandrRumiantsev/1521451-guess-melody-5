import PropTypes from 'prop-types';
import {genreQuestion__answers} from './genreQuestion__answers';
import {GameType} from '../const/GameType';

const genreQuestion = {
    answers: PropTypes.arrayOf(
      PropTypes.shape(
        genreQuestion__answers
      )
    ).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf(
    	[GameType.ARTIST, GameType.GENRE]
    ).isRequired
}

export {genreQuestion}